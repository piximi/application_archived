import * as types from './types';
import * as tensorflow from '@tensorflow/tfjs';
import { TensorContainer } from '@tensorflow/tfjs';
import { Dataset } from '@tensorflow/tfjs-data';
import { LazyIterator } from '@tensorflow/tfjs-data/dist/iterators/lazy_iterator';
import { fromPixels } from '@tensorflow/tfjs-core/dist/ops/browser';

export class ImageDataset extends Dataset<TensorContainer> {
  x: any;
  y: any;

  constructor(images: types.Image[], categories: types.Category[]) {
    super();

    let x = [];
    let y = [];

    for (const image of images) {
      const e: HTMLImageElement = new Image(691, 700);

      e.src = image.data;

      const tensor = fromPixels(e);

      // const indicies = images.map((image) => image.categoryIdentifier);

      const categoryIdentifier = image.categoryIdentifier;

      x.push(tensor);
      y.push(categoryIdentifier);
    }

    this.x = tensorflow.stack(x);
    this.y = y;
  }

  iterator(): Promise<LazyIterator<TensorContainer>> {
    throw new Error('Method not implemented.');
  }
}

class Network {
  constructor(
    categories: types.Category[],
    classifier: types.Classifier,
    images: types.Image[]
  ) {
    const dataset = new ImageDataset(images, categories);
  }

  fit = () => {};
}

export { Network };
