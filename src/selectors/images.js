import { createSelector } from 'reselect';

const getImages = images => images;

// Calculate no of visible categories for memoization
const getVisibleCategories = state => {
  let noOfVisibleCategories = 0;
  for (let category of state.categories) {
    if (category.visible) noOfVisibleCategories += 1;
  }
  return noOfVisibleCategories;
};

export const selectVisibleImages = state => {
  let result = {};
  for (let key in state.images.images) {
    if (state.images.images[key].visible)
      result[key] = state.images.images[key];
  }
  return result;
};

export const getVisibleImages = createSelector(
  [getImages, getVisibleCategories],
  images => selectVisibleImages(images)
);

export default getVisibleImages;
