import {
  ADD_IMAGES,
  UPDATE_IMAGE_CATEGORY,
  SET_IMAGE_CATEGORY_TO_NULL_BASED_ON_CATEGORY,
  UPDATE_IMAGE_VISIBILITY,
  UPDATE_IMAGE_VISIBILTY_BASED_ON_CATEGORY,
  UPDATE_UNLABELED_VISIBILITY,
  ONLY_SHOW_IMAGES_WITH_CERTAIN_CATEGORY,
  UPDATE_PROBABILITY,
  UPDATE_CATEGORY_AND_PROBABILITY
} from '../constants';

// Call to add images to the store
export const addImagesAction = images => ({
  type: ADD_IMAGES,
  images
});

// Call to update the category of an image
export const updateImageCategoryAction = (
  imgIdentifiers,
  categoryIdentifier,
  categoryName
) => ({
  type: UPDATE_IMAGE_CATEGORY,
  imgIdentifiers,
  categoryIdentifier,
  categoryName
});

// Call to update the visibility of all images with a certain category
export const updateImageVisibilityBasedOnCategoryAction = (
  categoryIdentifier,
  value
) => ({
  type: UPDATE_IMAGE_VISIBILTY_BASED_ON_CATEGORY,
  categoryIdentifier,
  value
});

// Call to toggle the visibility of unlabeled images
export const updateUnlabeledVisibilityAction = images => ({
  type: UPDATE_UNLABELED_VISIBILITY,
  images
});

export const updateImageVisibilityAction = images => ({
  type: UPDATE_IMAGE_VISIBILITY,
  images
});

// Call to only show images of a certain category
export const onlyShowImagesWithCertainCategoryAction = categoryIdentifier => ({
  type: ONLY_SHOW_IMAGES_WITH_CERTAIN_CATEGORY,
  categoryIdentifier
});

// Call to update images with a certain category, set category to null
export const setImageCategoryToNullBasedOnCategoryAction = categoryIdentifier => ({
  type: SET_IMAGE_CATEGORY_TO_NULL_BASED_ON_CATEGORY,
  categoryIdentifier
});

// Call to update the image probalbilty
export const updateImageProbabilityAction = (imgIdentifiers, probability) => ({
  type: UPDATE_PROBABILITY,
  imgIdentifiers,
  probability
});

//Call to set predictions
export const updateCategoryAndProbabilityAction = predictions => ({
  type: UPDATE_CATEGORY_AND_PROBABILITY,
  predictions
});
