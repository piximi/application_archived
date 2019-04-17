import {
  ADD_IMAGES,
  UPDATE_IMAGE_CATEGORY,
  SET_IMAGE_CATEGORY_TO_NULL_BASED_ON_CATEGORY,
  UPDATE_IMAGE_VISIBILITY,
  UPDATE_IMAGE_VISIBILTY_BASED_ON_CATEGORY,
  ONLY_SHOW_IMAGES_WITH_CERTAIN_CATEGORY,
  UPDATE_PROBABILITY,
  UPDATE_CATEGORY_AND_PROBABILITY,
  UPDATE_BRIGHTNESS,
  UPDATE_BRIGHTNESS_FOR_ALL_IMAGES,
  UPDATE_CONTRAST,
  UPDATE_CONTRAST_FOR_ALL_IMAGES,
  UPDATE_UNSELECTED_CHANNELS,
  UPDATE_UNSELECTED_CHANNELS_FOR_ALL_IMAGES,
  DELETE_IMAGES
} from '../constants';

// Call to add images to the store
export const addImagesAction = (images: {}) => ({
  type: ADD_IMAGES,
  images
});

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

// Call to update the visibility of all images with a certain category
export const updateImageVisibilityBasedOnCategoryAction = (
  categoryIdentifier: any,
  value: any
) => ({
  type: UPDATE_IMAGE_VISIBILTY_BASED_ON_CATEGORY,
  categoryIdentifier,
  value
});

export const updateImageVisibilityAction = (images: any) => ({
  type: UPDATE_IMAGE_VISIBILITY,
  images
});

// Call to only show images of a certain category
export const onlyShowImagesWithCertainCategoryAction = (categoryIdentifier: any) => ({
  type: ONLY_SHOW_IMAGES_WITH_CERTAIN_CATEGORY,
  categoryIdentifier
});

// Call to update images with a certain category, set category to null
export const setImageCategoryToNullBasedOnCategoryAction = (categoryIdentifier: any) => ({
  type: SET_IMAGE_CATEGORY_TO_NULL_BASED_ON_CATEGORY,
  categoryIdentifier
});

// Call to update the image probalbilty
export const updateImageProbabilityAction = (imgIdentifiers: any, probability: any) => ({
  type: UPDATE_PROBABILITY,
  imgIdentifiers,
  probability
});

//Call to set predictions
export const updateCategoryAndProbabilityAction = (predictions: {}) => ({
  type: UPDATE_CATEGORY_AND_PROBABILITY,
  predictions
});

// Call to update image brightness
export const updateBrightnessAction = (imgIdentifier: any, brightness: any) => ({
  type: UPDATE_BRIGHTNESS,
  imgIdentifier,
  brightness
});

// Call to update image contrast for all images
export const updateContrastForAllImagesAction = (contrast: any) => ({
  type: UPDATE_CONTRAST_FOR_ALL_IMAGES,
  contrast
});

// Call to update image contrast
export const updateContrastAction = (imgIdentifier: any, contrast: any) => ({
  type: UPDATE_CONTRAST,
  imgIdentifier,
  contrast
});

// Call to update image brightness for all images
export const updateBrightnessForAllImagesAction = (brightness: any) => ({
  type: UPDATE_BRIGHTNESS_FOR_ALL_IMAGES,
  brightness
});

// Call to update image unselected channels
export const updateUnselectedChannelsAction = (
  imgIdentifier: any,
  unselectedChannels: any
) => ({
  type: UPDATE_UNSELECTED_CHANNELS,
  imgIdentifier,
  unselectedChannels
});

// Call to update image unselected channels  for all images
export const updateUnselectedChannelsForAllImagesAction = (unselectedChannels: any) => ({
  type: UPDATE_UNSELECTED_CHANNELS_FOR_ALL_IMAGES,
  unselectedChannels
});

// Call to delete images
export const deleteImagesAction = (imgIdentifiers: any) => ({
  type: DELETE_IMAGES,
  imgIdentifiers
});
