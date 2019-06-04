import { Category, Image } from '@piximi/types';
import * as ImageJS from 'image-js';
import * as tensorflow from '@tensorflow/tfjs';

const findCategoryIndex = (
  categories: Category[],
  identifier: string
): number => {
  return categories.findIndex(
    (category: Category) => category.identifier === identifier
  );
};

const createDataset = async (categories: Category[], images: Image[]) => {
  images = images.filter(image => {
    return image.categoryIdentifier !== '00000000-0000-0000-0000-000000000000';
  });

  const categoryIdentifiers = images.map(image => {
    const categoryIndex = findCategoryIndex(
      categories,
      image.categoryIdentifier
    );

    return categories[categoryIndex].identifier;
  });

  let xs: tensorflow.Tensor<tensorflow.Rank>[] = [];
  let ys = [];

  for (const image of images) {
    const data = await ImageJS.Image.load(image.data);

    const canvas = data.getCanvas();

    const x = tensorflow.browser.fromPixels(canvas).toFloat();

    const resized = tensorflow.image.resizeBilinear(x, [224, 224]);

    const newShape = [1, 224, 224, 3];

    const offset = tensorflow.scalar(127.5);

    const batched = resized
      .sub(offset)
      .div(offset)
      .reshape(newShape);

    xs.push(batched);

    const categoryIndex = findCategoryIndex(
      categories,
      image.categoryIdentifier
    );

    ys.push(categoryIndex - 1);
  }

  let x = tensorflow.concat(xs);
  let y = tensorflow.oneHot(ys, categories.length - 1);

  return {
    x: x,
    y: y
  };
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

  const config = {
    layers: [
      ...backbone.layers,
      tensorflow.layers.flatten({
        inputShape: backbone.outputs[0].shape.slice(1)
      }),
      tensorflow.layers.dense({
        units: units,
        activation: 'relu',
        kernelInitializer: 'varianceScaling',
        useBias: true
      }),
      tensorflow.layers.dense({
        units: classes,
        kernelInitializer: 'varianceScaling',
        useBias: false,
        activation: 'softmax'
      })
    ]
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
