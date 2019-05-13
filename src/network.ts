import { Category, Image } from './types';
import * as ImageJS from 'image-js';
import * as TensorFlow from '@tensorflow/tfjs';
import { stack } from '@tensorflow/tfjs';

const findCategoryIndex = (
  categories: Category[],
  identifier: string
): number => {
  return categories.findIndex(
    (category: Category) => category.identifier === identifier
  );
};

async function getCanvas(image: Image) {
  return await ImageJS.Image.load(image.data).then((x: ImageJS.Image) =>
    x.getCanvas()
  );
}

class Network {
  private readonly categories: Category[];
  private readonly images: Image[];

  constructor(categories: Category[], images: Image[]) {
    this.categories = categories;
    this.images = images;
  }

  dataset = async () => {
    const images = [];
    const categories = [];

    for (const image of this.images) {
      const canvas = await getCanvas(image);

      const tensor = TensorFlow.browser.fromPixels(canvas);

      images.push(tensor);

      const categoryIndex = findCategoryIndex(
        this.categories,
        image.categoryIdentifier
      );

      categories.push(categoryIndex);
    }

    const x = stack(images);
    const y = TensorFlow.tensor(categories);

    return {
      x: x,
      y: y
    };
  };

  fit = () => {};
}

export { Network };
