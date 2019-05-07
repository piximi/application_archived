import { createAction, createReducer } from 'redux-starter-kit';
import { Image } from '../types';

export const createImageAction = createAction('images/create');

export const updateImageCategoryAction = createAction(
  'images/image/update-category'
);

export const deleteImageAction = createAction('images/delete-image');

const findImageIndex = (images: Image[], identifier: string): number => {
  return images.findIndex((image: Image) => image.identifier === identifier);
};

const initialState: Image[] = [];

const images = createReducer(initialState, {
  [createImageAction.toString()]: (state, action) => {
    action.payload.map((image: Image) => state.push(image));
  },
  [deleteImageAction.toString()]: (state, action) => {
    const { identifier } = action.payload;

    return state.filter((image: Image) => image.identifier !== identifier);
  },
  [updateImageCategoryAction.toString()]: (state, action) => {
    const { identifier, categoryIdentifier } = action.payload;

    const index: number = findImageIndex(state, identifier);

    const image: Image = state[index];

    image.categoryIdentifier = categoryIdentifier;
  }
});

export default images;
