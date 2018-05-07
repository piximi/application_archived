import { CREATE_CATEGORY } from '../constants';

export const createCategory = category => ({
  type: 'CREATE_CATEGORY',
  payload: category
});
