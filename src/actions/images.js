import {
  ADD_IMAGES,
  CREATE_IMAGE,
  DELETE_IMAGE,
  UPDATE_IMAGE_VISIBILTY,
  UPDATE_IMAGE_CATEGORY,
  UPDATE_PROBABILITY,
  UPDATE_IMAGES_HAVING_CERTAIN_CATEGORY,
  SORT_IMAGES
} from '../constants';

export const createImageAction = (image, imageByteStrings) => ({
  type: CREATE_IMAGE,
  image,
  imageByteStrings
});

export const updateImageCategoryAction = (identifier, category) => ({
  type: UPDATE_IMAGE_CATEGORY,
  identifier,
  category
});

export const updateImageProbability = (identifier, probability) => ({
  type: UPDATE_PROBABILITY,
  identifier,
  probability
});

export const updateImagesHavingCertainCategory = category => ({
  type: UPDATE_IMAGES_HAVING_CERTAIN_CATEGORY,
  category
});

export const deleteImageAction = identifier => ({
  type: DELETE_IMAGE,
  identifier
});

export const addImages = images => ({
  type: ADD_IMAGES,
  images
});

export const updateImageVisibility = (index, value) => ({
  type: UPDATE_IMAGE_VISIBILTY,
  index,
  value
});

export const sortImages = () => ({
  type: SORT_IMAGES
});
