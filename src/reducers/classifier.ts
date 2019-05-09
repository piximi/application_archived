import { createAction, createReducer } from 'redux-starter-kit';
import { Category, Classifier, Image } from '../types';

export const createCategoryAction = createAction('create-category');

export const createClassifierAction = createAction('create-classifier');

export const createImageAction = createAction('create-image');

export const createImageScoreAction = createAction('create-image-score');

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

export const updateImageBrightnessAction = createAction(
  'update-image-brightness'
);

export const updateImageCategoryAction = createAction('update-image-category');

export const updateImageContrastAction = createAction('update-image-contrast');

export const updateImageVisibilityAction = createAction(
  'update-image-visibility'
);

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

const initialState: Classifier = {
  categories: [],
  images: [],
  name: 'Untitled classifier'
};

const unknownCategory: Category = {
  classifierIdentifier: undefined,
  color: '#F8F8F8',
  description: 'Unknown',
  identifier: '00000000-0000-0000-0000-000000000000',
  index: 0,
  visible: true
};

initialState.categories.push(unknownCategory);

const classifier = createReducer(initialState, {
  [createCategoryAction.toString()]: (state, action) => {
    const { category } = action.payload;

    state.categories.push(category);
  },
  [createClassifierAction.toString()]: (state, action) => {
    const { name } = action.payload;

    state.categories = [];

    state.categories.push(unknownCategory);

    state.images = [];

    state.name = name;
  },
  [createImageAction.toString()]: (state, action) => {
    const { image } = action.payload;

    state.images.push(image);
  },
  [createImageScoreAction.toString()]: (state, action) => {
    const { identifier, score } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.scores.push(score);
  },
  [deleteCategoryAction.toString()]: (state, action) => {
    const { identifier } = action.payload;

    state.categories = state.categories.filter(
      (category: Category) => category.identifier !== identifier
    );
  },
  [deleteImageAction.toString()]: (state, action) => {
    const { identifier } = action.payload;

    state.images = state.images.filter(
      (image: Image) => image.identifier !== identifier
    );
  },
  [toggleCategoryVisibilityAction.toString()]: (state, action) => {
    const { identifier } = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.visible = !category.visible;
  },
  [updateCategoryColorAction.toString()]: (state, action) => {
    const { identifier, color } = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.color = color;
  },
  [updateCategoryDescriptionAction.toString()]: (state, action) => {
    const { identifier, description } = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.description = description;
  },
  [updateCategoryVisibilityAction.toString()]: (state, action) => {
    const { identifier, visible } = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.visible = visible;
  },
  [updateClassifierNameAction.toString()]: (state, action) => {
    const { name } = action.payload;

    state.name = name;
  },
  [updateImageBrightnessAction.toString()]: (state, action) => {
    const { identifier, brightness } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.brightness = brightness;
  },
  [updateImageCategoryAction.toString()]: (state, action) => {
    const { identifier, categoryIdentifier } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.categoryIdentifier = categoryIdentifier;
  },
  [updateImageContrastAction.toString()]: (state, action) => {
    const { identifier, contrast } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.contrast = contrast;
  },
  [updateImageVisibilityAction.toString()]: (state, action) => {
    const { identifier, visible } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.visible = visible;
  }
});

export default classifier;
