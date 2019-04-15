import { createAction, createReducer } from 'redux-starter-kit';

export const addCategoryAction = createAction('categories/add');
export const createCategoryAction = createAction('categories/create');
export const deleteCategoryAction = createAction('categories/delete');
export const soloCategoryAction = createAction('categories/solo');
export const updateCategoryColorAction = createAction(
  'categories/update/color'
);
export const updateCategoryDescriptionAction = createAction(
  'categories/update/description'
);
export const updateCategoryVisibilityAction = createAction(
  'categories/update/visibility'
);

const categories = createReducer([], {
  [addCategoryAction]: (state, action) => {
    const category = {
      color: '#F8F8F8',
      description: 'Unlabeled',
      identifier: null,
      index: '-1',
      visible: true
    };

    state.push(category);
  },
  [createCategoryAction]: (state, action) => {
    const category = action.payload;

    state.push(category);
  },
  [deleteCategoryAction]: (state, action) => {},
  [soloCategoryAction]: (state, action) => {},
  [updateCategoryColorAction]: (state, action) => {
    const { index, color } = action.payload;

    const category = state[index];

    category.color = color;
  },
  [updateCategoryDescriptionAction]: (state, action) => {
    const { index, description } = action.payload;

    const category = state[index];

    category.description = description;
  },
  [updateCategoryVisibilityAction]: (state, action) => {
    const { index, visibility } = action.payload;

    const category = state[index];

    category.visibility = visibility;
  }
});

export default categories;
