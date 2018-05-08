import { CREATE_IMAGE, DELETE_IMAGE } from '../constants';

const images = (state = [], action) => {
  switch (action.type) {
    case CREATE_IMAGE:
      return [...state, action.image];
    case DELETE_IMAGE:
      return state.filter(image => {
        return image.identifier !== action.identifier;
      });
    default:
      return state;
  }
};

export default images;
