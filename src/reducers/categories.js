import { createAction, createReducer } from 'redux-starter-kit';

export const addCategoryAction = createAction('categories/add');

export const createCategoryAction = createAction('categories/create');

export const deleteCategoryAction = createAction('categories/category/delete');

export const hideOtherCategoriesAction = createAction(
  'categories/category/hide-other-categories'
);

export const toggleCategoryVisibility = createAction(
  'categories/category/toggle-visibility'
);

export const updateCategoryColor = createAction(
  'categories/category/update-color'
);
export const updateCategoryDescription = createAction(
  'categories/category/update-description'
);
export const updateCategoryVisibility = createAction(
  'categories/category/update-visibility'
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
  [deleteCategoryAction]: (state, action) => {
    const { index } = action.payload;

    return state.filter(category => category.index !== index);
  },
  [hideOtherCategoriesAction]: (state, action) => {},
  [toggleCategoryVisibility]: (state, action) => {
    const { index } = action.payload;

    const category = state[index];

    category.visible = !category.visible;
  },
  [updateCategoryColor]: (state, action) => {
    const { index, color } = action.payload;

    const category = state[index];

    category.color = color;
  },
  [updateCategoryDescription]: (state, action) => {
    const { index, description } = action.payload;

    const category = state[index];

    category.description = description;
  },
  [updateCategoryVisibility]: (state, action) => {
    const { index } = action.payload;

    const category = state[index];

    category.visible = !category.visible;
  }
});

export default categories;
