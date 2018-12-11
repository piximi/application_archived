import {
  ADD_IMAGES,
  UPDATE_IMAGE_CATEGORY,
  UPDATE_IMAGE_VISIBILTY,
  UPDATE_UNLABELED_VISIBILITY,
  UPDATE_IMAGES_HAVING_CERTAIN_CATEGORY,
  UPDATE_PROBABILITY
} from '../constants';

const images = (state = {}, action) => {
  let images = {};
  switch (action.type) {
    // Call to add images to the store
    case ADD_IMAGES:
      return {
        ...state,
        images: action.images
      };

    // Call to update the category of the image
    case UPDATE_IMAGE_CATEGORY:
      images = { ...state.images };
      images[action.imgIdentifier].category = action.categoryIdentifier;
      images[action.imgIdentifier].categoryName = action.categoryName;
      return {
        ...state,
        images: images
      };

    // Call to update the visibility of an image, helpful for filtering
    case UPDATE_IMAGE_VISIBILTY:
      images = { ...state.images };
      images[action.imgIdentifier].visible = action.value;
      return {
        ...state,
        images: images
      };

    // Call to toggle visibility of unlabeled images, helpful for blening out/in unlabeled images
    case UPDATE_UNLABELED_VISIBILITY:
      images = { ...state.images };
      for (let key in images) {
        if (images[key].category === null) {
          images[key].visible = !images[key].visible;
        }
      }
      return {
        ...state,
        images: images
      };

    // Call to update images that have a certain category, helpful when a category was deleted
    case UPDATE_IMAGES_HAVING_CERTAIN_CATEGORY:
      images = { ...state.images };
      for (let key in images) {
        if (images[key].category === action.categoryIdentifier) {
          images[key].category = null;
        }
      }
      return { ...state, images: images };

    // Call to update the imae probability, helpful for setting probablility after prediction
    case UPDATE_PROBABILITY:
      images = { ...state.images };
      images[action.imgIdentifier].probability = action.probability;
      return { ...state, images: images };

    default:
      return state;
  }
};

export default images;
