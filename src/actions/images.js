import { CREATE_IMAGE, DELETE_IMAGE } from '../constants';

export const createImageAction = (image, imageByteStrings) => ({
  type: 'CREATE_IMAGE',
  image: image,
  imageByteStrings: imageByteStrings
});

export const updateImageCategoryAction = (identifier, category) => ({
  type: 'UPDATE_IMAGE_CATEGORY',
  identifier,
  category
});

export const deleteImageAction = identifier => ({
  type: 'DELETE_IMAGE',
  identifier
});
