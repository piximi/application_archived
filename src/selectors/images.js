import { createSelector } from 'reselect';

const getVisibleCategories = (state, props) => {
  return '';
};

const getImages = state => {
  return state.images;
};

const getVisibleImages = createSelector(
  [getVisibleCategories, getImages],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      default:
        return todos;
    }
  }
);

export default getVisibleImages;
