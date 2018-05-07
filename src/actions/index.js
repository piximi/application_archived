import { CREATE_CATEGORY, DELETE_CATEGORY } from '../constants';

export const createCategory = category => ({
  type: 'CREATE_CATEGORY',
  payload: category
});

export const deleteCategory = category => ({
  type: 'DELETE_CATEGORY',
  payload: category
});
