import { Image, Partition, Category } from '@piximi/types';
import { compileExpression } from 'filtrex';

var changeImagesVisibilityFunction: (
  itentifiers: string[],
  visibility: boolean
) => void;
var invisibleImages: string[] = [];

const categoryDict: { [identifier: string]: string } = {};
const flattendedImages: {
  identifier: string;
  category: string;
  probability: number;
  prediction: string;
  partition: string;
}[] = [];

export const ImageSearch = (searchInput: string) => {
  try {
    var searchFunction = compileExpression(searchInput);
  } catch (error) {
    alert('invalid search input');
    return true;
  }

  var negativeSearchResults: string[] = [];
  var positiveSearchResults: string[] = [];
  flattendedImages.forEach(image => {
    if (searchFunction(image) === 0) {
      negativeSearchResults.push(image.identifier);
    } else {
      positiveSearchResults.push(image.identifier);
    }
  });

  changeImagesVisibilityFunction(negativeSearchResults, false);
  changeImagesVisibilityFunction(positiveSearchResults, true);

  debugger;
  invisibleImages = negativeSearchResults;
  return invisibleImages.length !== 0;
};

export const ClearSearch = () => {
  changeImagesVisibilityFunction(invisibleImages, true);
};

export const InitializeSearch = (
  categories: Category[],
  images: Image[],
  changeImagesVisibility: (itentifiers: string[], visibility: boolean) => void
) => {
  changeImagesVisibilityFunction = changeImagesVisibility;

  categories.forEach((category: Category) => {
    categoryDict[category.identifier] = category.description;
  });
  images.forEach((image: Image) => flattenImage(image));
};

const getPrediction = (image: Image) => {
  var maxScore = 0;
  var lableIndex = 0;
  for (let i = 0; i < image.scores.length; i++) {
    if (image.scores[i].probability > maxScore) {
      maxScore = image.scores[i].probability;
      lableIndex = i;
    }
  }
  return {
    prediction: image.scores[lableIndex].categoryIdentifier,
    probability: image.scores[lableIndex].probability
  };
};

const flattenImage = (image: Image) => {
  var probability: number;
  var prediction: string;
  if (image.scores.length === 0) {
    probability = -1;
    prediction = 'none';
  } else {
    const imagePrediction = getPrediction(image);
    probability = imagePrediction.probability;
    prediction = imagePrediction.prediction;
  }

  const category = categoryDict[image.categoryIdentifier];
  const partition = Partition[image.partition].toLowerCase();

  flattendedImages.push({
    identifier: image.identifier,
    category: category,
    probability: probability,
    prediction: prediction,
    partition: partition
  });
};
