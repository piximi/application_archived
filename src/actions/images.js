import { CREATE_IMAGE, DELETE_IMAGE } from '../constants';

export const createImageAction = (image, imageByteStrings) => ({
  type: 'CREATE_IMAGE',
  image,
  imageByteStrings
});

export const updateImageCategoryAction = (identifier, category) => ({
  type: 'UPDATE_IMAGE_CATEGORY',
  identifier,
  category
});

export const updateImagesHavingCertainCategory = category => ({
  type: 'UPDATE_IMAGES_HAVING_CERTAIN_CATEGORY',
  category
});

export const deleteImageAction = identifier => ({
  type: 'DELETE_IMAGE',
  identifier
});

export const addImages = images => ({
  type: 'ADD_IMAGES',
  images
});
