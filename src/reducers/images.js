import {
  CREATE_IMAGE,
  DELETE_IMAGE,
  UPDATE_IMAGE_CATEGORY,
  ADD_IMAGES,
  UPDATE_IMAGES_HAVING_CERTAIN_CATEGORY
} from '../constants';

const images = (state = {}, action) => {
  let images = [];
  switch (action.type) {
    case CREATE_IMAGE:
      return {
        ...state,
        images: action.image,
        imageByteStrings: action.imageByteStrings
      };
    case DELETE_IMAGE:
      return state.filter(image => {
        return image.identifier !== action.identifier;
      });
    case UPDATE_IMAGE_CATEGORY:
      images = state.images.map(image => {
        if (image.identifier === action.identifier) {
          return {
            ...image,
            category: action.category
          };
        } else {
          return image;
        }
      });
      return {
        ...state,
        images: images
      };

    case UPDATE_IMAGES_HAVING_CERTAIN_CATEGORY:
      console.log('True');
      images = state.images.map(image => {
        if (image.category === action.category) {
          return {
            ...image,
            category: null
          };
        } else {
          return image;
        }
      });
      return {
        ...state,
        images: images
      };

    case ADD_IMAGES:
      return {
        ...state,
        images: action.images
      };

    default:
      return state;
  }
};

export default images;
