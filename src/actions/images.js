import { CREATE_IMAGE, DELETE_IMAGE } from '../constants';

export const createImageAction = category => ({
  type: 'CREATE_IMAGE',
  category
});

export const updateImageCategoryAction = (identifier, categoryIdentifier) => ({
  type: 'UPDATE_IMAGE_CATEGORY',
  identifier,
  categoryIdentifier
});

export const deleteImageAction = identifier => ({
  type: 'DELETE_IMAGE',
  identifier
});
