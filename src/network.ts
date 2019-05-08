import { Category, Classifier, Image } from './types';

class Network {
  categories: Category[];
  classifier: Classifier;
  images: Image[];

  constructor(categories: Category[], classifier: Classifier, images: Image[]) {
    this.categories = categories;
    this.classifier = classifier;
    this.images = images;
  }

  fit = () => {};
}

export { Network };
