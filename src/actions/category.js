import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY_DESCRIPTION,
  UPDATE_CATEGORY_VISIBILITY
} from '../constants';

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
