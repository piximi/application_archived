import {
  ADD_CATEGORIES,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY_DESCRIPTION,
  UPDATE_CATEGORY_VISIBILITY
} from '../constants';

export const addCategories = categories => ({
  type: 'ADD_CATEGORIES',
  categories
});

export const createCategoryAction = category => ({
  type: 'CREATE_CATEGORY',
  category
});

export const deleteCategoryAction = identifier => ({
  type: 'DELETE_CATEGORY',
  identifier
});

export const updateCategoryDescriptionAction = (identifier, description) => ({
  type: 'UPDATE_CATEGORY_DESCRIPTION',
  identifier,
  description
});

export const updateCategoryVisibilityAction = identifier => ({
  type: 'UPDATE_CATEGORY_VISIBILITY',
  identifier
});
