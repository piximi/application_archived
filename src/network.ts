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

async function getCanvas(image: Image) {
  return await ImageJS.Image.load(image.data).then((x: ImageJS.Image) =>
    x.getCanvas()
  );
}

class Network {
  private readonly categories: Category[];
  private readonly images: Image[];
  private backbone: tensorflow.LayersModel | undefined;
  private model?: tensorflow.LayersModel;

  constructor(categories: Category[], images: Image[]) {
    this.categories = categories;
    this.images = images;
  }

  compile = () => {
    if (this.model) {
      const optimizer = tensorflow.train.adam();

      const args = {
        loss: 'categoricalCrossentropy',
        metrics: ['accuracy'],
        optimizer: optimizer
      };

      this.model.compile(args);
    }
  };

  createBackbone = async (
    pathOrIOHandler: string | tensorflow.io.IOHandler
  ) => {
    await tensorflow.loadLayersModel(pathOrIOHandler).then(backbone => {
      const activation = backbone.getLayer('conv_pw_13_relu');

      this.backbone = tensorflow.model({
        inputs: backbone.inputs,
        outputs: activation.output
      });
    });
  };

  load = async (pathOrIOHandler: string | tensorflow.io.IOHandler) => {
    this.createBackbone(pathOrIOHandler);

    if (this.backbone) {
      const a = tensorflow.layers.flatten({
        inputShape: this.backbone.outputs[0].shape.slice(1)
      });

      const b = tensorflow.layers.dense({
        activation: 'relu',
        kernelInitializer: 'varianceScaling',
        units: 1000,
        useBias: true
      });

      const c = tensorflow.layers.dense({
        activation: 'softmax',
        kernelInitializer: 'varianceScaling',
        units: this.categories.length - 1,
        useBias: false
      });

      const layers = [a, b, c];

      const config = {
        layers: layers
      };

      this.model = tensorflow.sequential(config);
    }
  };

  fit = async (x: tensorflow.Tensor, y: tensorflow.Tensor, args?: any) => {
    if (this.model) {
      await this.model.fit(x, y, args);
    }
  };

  dataset = async () => {
    const images: tensorflow.Tensor[] = [];
    const categories = [];

    for (const image of this.images) {
      await getCanvas(image).then(canvas => {
        const x = tensorflow.browser.fromPixels(canvas).toFloat();

        const resized = tensorflow.image.resizeBilinear(x, [224, 224]);

        const newShape = [1, 224, 224, 3];

        const offset = tensorflow.scalar(127.5);

        const batched = resized
          .sub(offset)
          .div(offset)
          .reshape(newShape);

        images.push(batched);
      });

      const categoryIndex = findCategoryIndex(
        this.categories,
        image.categoryIdentifier
      );

      categories.push(categoryIndex);
    }

    const x = tensorflow.concat(images);

    const y = tensorflow.oneHot(categories, categories.length - 1);

    return {
      x: x,
      y: y
    };
  };
}

export { Network };
