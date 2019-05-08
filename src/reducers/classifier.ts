import { createAction, createReducer } from 'redux-starter-kit';
import { Category, Classifier, Image } from '../types';

export const addCategoryAction = createAction('add-category');
export const createCategoryAction = createAction('create-category');
export const createClassifierAction = createAction('create-classifier');
export const createImageAction = createAction('create-image');
export const deleteCategoryAction = createAction('delete-category');
export const deleteImageAction = createAction('delete-image');
export const toggleCategoryVisibilityAction = createAction(
  'toggle-category-visibility'
);
export const updateCategoryColorAction = createAction('update-category-color');
export const updateCategoryDescriptionAction = createAction(
  'update-category-description'
);
export const updateCategoryVisibilityAction = createAction(
  'update-category-visibility'
);
export const updateClassifierNameAction = createAction(
  'update-classifier-name'
);
export const updateImageCategoryAction = createAction('update-image-category');

const findCategoryIndex = (
  categories: Category[],
  identifier: string
): number => {
  return categories.findIndex(
    (category: Category) => category.identifier === identifier
  );
};

const findImageIndex = (images: Image[], identifier: string): number => {
  return images.findIndex((image: Image) => image.identifier === identifier);
};

const categories: Category[] = [
  {
    classifierIdentifier: undefined,
    color: '#F8F8F8',
    description: 'Unknown',
    identifier: '00000000-0000-0000-0000-000000000000',
    index: 0,
    visible: true
  }
];

const images: Image[] = [];

const initialState: Classifier = {
  categories: categories,
  images: images,
  name: 'Untitled classifier'
};

const classifier = createReducer(initialState, {
  [addCategoryAction.toString()]: (state, action) => {
    action.payload.map((category: Category) => state.categories.push(category));
  },
  [createCategoryAction.toString()]: (state, action) => {
    const category: Category = action.payload;

    state.categories.push(category);
  },
  [createClassifierAction.toString()]: (state, action) => {
    state = action.payload;
  },
  [createImageAction.toString()]: (state, action) => {
    action.payload.map((image: Image) => state.images.push(image));
  },
  [deleteCategoryAction.toString()]: (state, action) => {
    const { identifier } = action.payload;

    return state.categories.filter(
      (category: Category) => category.identifier !== identifier
    );
  },
  [deleteImageAction.toString()]: (state, action) => {
    const { identifier } = action.payload;

    return state.images.filter(
      (image: Image) => image.identifier !== identifier
    );
  },
  [toggleCategoryVisibilityAction.toString()]: (state, action) => {
    const { identifier } = action.payload;

    const index = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.visible = !category.visible;
  },
  [updateCategoryColorAction.toString()]: (state, action) => {
    const { identifier, color } = action.payload;

    const index = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.color = color;
  },
  [updateCategoryDescriptionAction.toString()]: (state, action) => {
    const { identifier, description } = action.payload;

    const index = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.description = description;
  },
  [updateCategoryVisibilityAction.toString()]: (state, action) => {
    const { identifier, visible } = action.payload;

    const index = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.visible = visible;
  },
  [updateClassifierNameAction.toString()]: (state, action) => {
    const { name } = action.payload;

    state.name = name;
  },
  [updateImageCategoryAction.toString()]: (state, action) => {
    const { identifier, categoryIdentifier } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.categoryIdentifier = categoryIdentifier;
  }
});

export default classifier;
