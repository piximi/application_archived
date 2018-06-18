import {
  CREATE_IMAGE,
  DELETE_IMAGE,
  UPDATE_IMAGE_CATEGORY,
  ADD_IMAGES,
  UPDATE_PROBABILITY,
  UPDATE_IMAGES_HAVING_CERTAIN_CATEGORY,
  UPDATE_IMAGE_VISIBILTY,
  SORT_IMAGES
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
    case UPDATE_PROBABILITY:
      images = state.images.map(image => {
        if (image.identifier === action.identifier) {
          return {
            ...image,
            probability: action.probability
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
    case UPDATE_IMAGE_VISIBILTY:
      images = state.images;
      images[action.index].visible = action.value;

      return {
        ...state,
        images: images
      };
    case SORT_IMAGES:
      //images = state.images;
      //images[action.index].visible = action.value;

      console.log('HAHAHA');
      let sortedImages = [...state.images];
      console.log(sortedImages);
      sortedImages.sort(function(a, b) {
        if (a.category === null) {
          return -1;
        } else if (b.category === null) {
          return 1;
        } else if (a.category === b.category) {
          return 0;
        } else {
          return a.category < b.category ? -1 : 1;
        }
      });
      console.log(sortedImages);

      return {
        ...state,
        images: sortedImages
      };
    default:
      return state;
  }
};

export default images;
