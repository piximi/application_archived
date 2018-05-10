import {
  CREATE_IMAGE,
  DELETE_IMAGE,
  UPDATE_IMAGE_CATEGORY
} from '../constants';

const images = (state = { images: [], imageByteStrings: {} }, action) => {
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
      const images = state.images.map(image => {
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

    default:
      return state;
  }
};

export default images;
