import { createAction, createReducer } from 'redux-starter-kit';

export const addCategoryAction = createAction('categories/add');

export const createCategoryAction = createAction('categories/create');

export const deleteCategory = createAction(
  'categories/category/delete'
);

export const soloCategoryAction = createAction('categories/solo');

export const updateCategoryColor = createAction(
  'categories/update/color'
);
export const updateCategoryDescription = createAction(
  'categories/update/description'
);
export const updateCategoryVisibility = createAction(
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
  [deleteCategory]: (state, action) => {
    const {index} = action.payload;

    return state.filter(category => category.index !== index);
  },
  [soloCategoryAction]: (state, action) => {},
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
    const { index, visibility } = action.payload;

    const category = state[index];

    category.visibility = visibility;
  }
});

export default categories;
