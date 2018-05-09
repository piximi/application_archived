import { CLASSIFIER_OPEN, CLASSIFIER_SAVE } from '../constants';

export const createCategoryAction = pathname => ({
  type: 'CLASSIFIER_OPEN',
  pathname
});

export const deleteCategoryAction = pathname => ({
  type: 'CLASSIFIER_SAVE',
  pathname
});
