import {
  ADD_IMAGES,
  UPDATE_IMAGE_CATEGORY,
  UPDATE_IMAGE_VISIBILTY,
  UPDATE_UNLABELED_VISIBILITY,
  UPDATE_IMAGES_HAVING_CERTAIN_CATEGORY,
  UPDATE_PROBABILITY
} from '../constants';

// Call to add images to the store
export const addImagesAction = images => ({
  type: ADD_IMAGES,
  images
});

// Call to update the category of an image
export const updateImageCategoryAction = (
  imgIdentifier,
  categoryIdentifier,
  categoryName
) => ({
  type: UPDATE_IMAGE_CATEGORY,
  imgIdentifier,
  categoryIdentifier,
  categoryName
});

// Call to update the visibility of an image
export const updateImageVisibilityAction = (imgIdentifier, value) => ({
  type: UPDATE_IMAGE_VISIBILTY,
  imgIdentifier,
  value
});

// Call to toggle the visibility of unlabeled images
export const updateUnlabeledVisibilityAction = images => ({
  type: UPDATE_UNLABELED_VISIBILITY,
  images
});

// Call to update images with a certain category, set category to null
export const updateImagesHavingCertainCategoryAction = categoryIdentifier => ({
  type: UPDATE_IMAGES_HAVING_CERTAIN_CATEGORY,
  categoryIdentifier
});

// Call to update the image probalbilty
export const updateImageProbabilityAction = (imgIdentifier, probability) => ({
  type: UPDATE_PROBABILITY,
  imgIdentifier,
  probability
});
