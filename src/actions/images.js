import { CREATE_IMAGE, DELETE_IMAGE } from '../constants';

export const createImageAction = category => ({
  type: 'CREATE_IMAGE',
  category
});

export const deleteImageAction = identifier => ({
  type: 'DELETE_IMAGE',
  identifier
});
