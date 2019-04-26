import { createAction, createReducer } from 'redux-starter-kit';
import { Category } from '../types';

export const addCategoryAction = createAction('categories/add');

export const createCategoryAction = createAction('categories/create');

export const deleteCategoryAction = createAction('categories/category/delete');

export const hideOtherCategoriesAction = createAction(
  'categories/category/hide-other-categories'
);

export const toggleCategoryVisibilityAction = createAction(
  'categories/category/toggle-visibility'
);

export const updateCategoryColorAction = createAction(
  'categories/category/update-color'
);

export const updateCategoryDescriptionAction = createAction(
  'categories/category/update-description'
);

export const updateCategoryVisibilityAction = createAction(
  'categories/category/update-visibility'
);

const initialState: Category[] = [
  {
    classifierIdentifier: undefined,
    color: '#F8F8F8',
    description: 'Unknown',
    identifier: '00000000-0000-0000-0000-000000000000',
    index: 0,
    visible: true
  }
];

const categories = createReducer(initialState, {
  [addCategoryAction.toString()]: (state, action) => {
    const category: Category = {
      classifierIdentifier: undefined,
      color: '#F8F8F8',
      description: 'Unknown',
      identifier: '00000000-0000-0000-0000-000000000000',
      index: 0,
      visible: true
    };

    state.push(category);
  },
  [createCategoryAction.toString()]: (state, action) => {
    const category: Category = action.payload;

    state.push(category);
  },
  [deleteCategoryAction.toString()]: (state, action) => {
    const { identifier } = action.payload;

    return state.filter(
      (category: Category) => category.identifier !== identifier
    );
  },
  [hideOtherCategoriesAction.toString()]: (state, action) => {},
  [toggleCategoryVisibilityAction.toString()]: (state, action) => {
    const { index } = action.payload;

    const category: Category = state[index];

    category.visible = !category.visible;
  },
  [updateCategoryColorAction.toString()]: (state, action) => {
    const { index, color } = action.payload;

    const category: Category = state[index];

    category.color = color;
  },
  [updateCategoryDescriptionAction.toString()]: (state, action) => {
    const { index, description } = action.payload;

    const category: Category = state[index];

    category.description = description;
  },
  [updateCategoryVisibilityAction.toString()]: (state, action) => {
    const { index } = action.payload;

    const category: Category = state[index];

    category.visible = !category.visible;
  }
});

export default categories;
