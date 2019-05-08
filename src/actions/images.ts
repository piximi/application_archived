import {
  UPDATE_IMAGE_CATEGORY,
  UPDATE_PROBABILITY,
  UPDATE_CATEGORY_AND_PROBABILITY
} from '../constants';

// Call to update the category of an image
export const updateImageCategoryAction = (
  imgIdentifiers: any,
  categoryIdentifier: any,
  categoryName: any
) => ({
  type: UPDATE_IMAGE_CATEGORY,
  imgIdentifiers,
  categoryIdentifier,
  categoryName
});

// Call to update the image probalbilty
export const updateImageProbabilityAction = (
  imgIdentifiers: any,
  probability: any
) => ({
  type: UPDATE_PROBABILITY,
  imgIdentifiers,
  probability
});

//Call to set predictions
export const updateCategoryAndProbabilityAction = (predictions: {}) => ({
  type: UPDATE_CATEGORY_AND_PROBABILITY,
  predictions
});
