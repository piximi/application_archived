import {
  CREATE_IMAGE,
  DELETE_IMAGE,
  UPDATE_IMAGE_CATEGORY
} from '../constants';

const images = (state = [], action) => {
  switch (action.type) {
    case CREATE_IMAGE:
      return [...state, action.image];
    case DELETE_IMAGE:
      return state.filter(image => {
        return image.identifier !== action.identifier;
      });
    case UPDATE_IMAGE_CATEGORY:
      return state.map(image => {
        if (image.identifier === action.identifier) {
          return {
            ...image,
            category: action.category
          };
        } else {
          return image;
        }
      });
    default:
      return state;
  }
};

export default images;
