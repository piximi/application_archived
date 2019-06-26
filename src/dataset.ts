import { Category, Image } from '@piximi/types';
import * as ImageJS from 'image-js';
import * as tensorflow from '@tensorflow/tfjs';

const VALIDATIONSET_RATIO = 0.2;

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

const tensorImageData = async (image: Image) => {
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

const createTrainAndTestSet = async (
  categories: Category[],
  images: Image[]
) => {
  const trainData = images.filter(
    (image: Image) =>
      image.categoryIdentifier !== '00000000-0000-0000-0000-000000000000'
  );

  const numSamplesValidation = Math.max(
    1,
    Math.round(trainData.length * VALIDATIONSET_RATIO)
  );
  tensorflow.util.shuffle(trainData);
  const validationData = trainData.splice(0, numSamplesValidation);

  const validationDataSet = await createLabledTensorflowDataSet(
    validationData,
    categories
  );
  const trainDataSet = await createLabledTensorflowDataSet(
    trainData,
    categories
  );

  return { trainData: trainDataSet, testData: validationDataSet };
};

const createPredictionSet = async (images: Image[]) => {
  const predictionImageSet = images.filter(
    (image: Image) =>
      image.categoryIdentifier === '00000000-0000-0000-0000-000000000000'
  );

  const predictionTensorSet: tensorflow.Tensor<tensorflow.Rank>[] = [];

  for (const image of predictionImageSet) {
    predictionTensorSet.push(await tensorImageData(image));
  }
  debugger;

  return tensorflow.tidy(() => tensorflow.concat(predictionImageSet));
};

const createLabledTensorflowDataSet = async (
  labledData: Image[],
  categories: Category[]
) => {
  let tensorData: tensorflow.Tensor<tensorflow.Rank>[] = [];
  let tensorLables: any = [];

  for (const image of labledData) {
    tensorData.push(await tensorImageData(image));
    tensorLables.push(
      findCategoryIndex(categories, image.categoryIdentifier) - 1
    );
  }

  let concatenatedTensorData = tensorflow.tidy(() =>
    tensorflow.concat(tensorData)
  );
  let concatenatedLableData = tensorflow.tidy(() =>
    tensorflow.oneHot(tensorLables, categories.length - 1)
  );

  return { data: concatenatedTensorData, lables: concatenatedLableData };
};

export { createPredictionSet, createTrainAndTestSet };
