import {
  ADD_CATEGORIES,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY_DESCRIPTION,
  UPDATE_CATEGORY_VISIBILITY,
  UPDATE_CATEGORY_COLOR,
  DISPLAY_THIS_CATEGORY_ONLY
} from '../constants';

export const addCategoriesAction = categories => ({
  type: ADD_CATEGORIES,
  categories
});

export const createCategoryAction = category => ({
  type: CREATE_CATEGORY,
  category
});

export const deleteCategoryAction = identifier => ({
  type: DELETE_CATEGORY,
  identifier
});

export const updateCategoryDescriptionAction = (identifier, description) => ({
  type: UPDATE_CATEGORY_DESCRIPTION,
  identifier,
  description
});

export const updateCategoryColorAction = (identifier, color) => ({
  type: UPDATE_CATEGORY_COLOR,
  identifier,
  color
});

export const updateCategoryVisibilityAction = identifier => ({
  type: UPDATE_CATEGORY_VISIBILITY,
  identifier
});

export const displayThisCategoryOnlyAction = identifier => ({
  type: DISPLAY_THIS_CATEGORY_ONLY,
  identifier
});
