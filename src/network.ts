import { Category, Image } from '@piximi/types';
import * as ImageJS from 'image-js';
import * as tensorflow from '@tensorflow/tfjs';
import * as _ from 'lodash';

const imageToSquare = (
  image: HTMLImageElement | HTMLCanvasElement,
  size: number
): HTMLCanvasElement => {
  const dimensions =
    image instanceof HTMLImageElement
      ? { width: image.naturalWidth, height: image.naturalHeight }
      : image;

  const scale = size / Math.max(dimensions.height, dimensions.width);
  const width = scale * dimensions.width;
  const height = scale * dimensions.height;

  const canvas = document.createElement('canvas') as HTMLCanvasElement;

  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext('2d') as CanvasRenderingContext2D;

  context.drawImage(image, 0, 0, width, height);

  return canvas;
};

const findCategoryIndex = (
  categories: Category[],
  identifier: string
): number => {
  return categories.findIndex(
    (category: Category) => category.identifier === identifier
  );
};

const extracted = async (image: Image) => {
  const data = await ImageJS.Image.load(image.data);

  return tensorflow.tidy(() => {
    return tensorflow.browser
      .fromPixels(imageToSquare(data.getCanvas(), 224))
      .toFloat()
      .sub(tensorflow.scalar(127.5))
      .div(tensorflow.scalar(127.5))
      .reshape([1, 224, 224, 3]);
  });
};

const createDataset = async (categories: Category[], images: Image[]) => {
  images = images.splice(0, 1024);
  categories = categories.splice(0, 1024);

  images = images.filter(image => {
    return image.categoryIdentifier !== '00000000-0000-0000-0000-000000000000';
  });

  let xs: tensorflow.Tensor<tensorflow.Rank>[] = [];
  let ys: any = [];

  for (const image of images) {
    let x = await extracted(image);

    xs.push(x);
  }

  for (const image of images) {
    const categoryIndex = findCategoryIndex(
      categories,
      image.categoryIdentifier
    );

    ys.push(categoryIndex - 1);
  }

  const x = _.chunk(xs, 32);
  const y = _.chunk(ys, 32);

  return _.zip(x, y);
};

const createModel = async (classes: number, units: number) => {
  const resource =
    'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json';

  const mobilenet = await tensorflow.loadLayersModel(resource);

  const layer = mobilenet.getLayer('conv_pw_13_relu');

  const backbone = tensorflow.model({
    inputs: mobilenet.inputs,
    outputs: layer.output
  });

  for (const layer of backbone.layers) layer.trainable = false;

  const a = tensorflow.layers.flatten({
    inputShape: backbone.outputs[0].shape.slice(1)
  });

  const b = tensorflow.layers.dense({
    units: units,
    activation: 'relu',
    kernelInitializer: 'varianceScaling',
    useBias: true
  });

  const c = tensorflow.layers.dense({
    units: classes,
    kernelInitializer: 'varianceScaling',
    useBias: false,
    activation: 'softmax'
  });

  const config = {
    layers: [...backbone.layers, a, b, c]
  };

  const model = tensorflow.sequential(config);

  const optimizer = tensorflow.train.adam();

  model.compile({
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy'],
    optimizer: optimizer
  });

  return model;
};

export { createDataset, createModel };
