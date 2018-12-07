import {
  ADD_IMAGES,
  DELETE_IMAGE,
  UPDATE_IMAGE_CATEGORY,
  UPDATE_PROBABILITY,
  UPDATE_IMAGES_HAVING_CERTAIN_CATEGORY,
  UPDATE_IMAGE_VISIBILTY,
  UPDATE_UNLABELED_VISIBILITY,
  UPDATE_IMAGE_BRIGHTNESS
} from '../constants';

const images = (state = {}, action) => {
  let images = [];
  switch (action.type) {
    case ADD_IMAGES:
      return {
        ...state,
        images: action.images
      };
    case DELETE_IMAGE:
      return state.filter(image => {
        return image.identifier !== action.identifier;
      });
    case UPDATE_IMAGE_CATEGORY:
      images = state.images.map(image => {
        if (image.identifier === action.imgIdentifier) {
          return {
            ...image,
            category: action.categoryIdentifier,
            categoryName: action.categoryName
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

    case UPDATE_IMAGE_VISIBILTY:
      images = state.images;
      images[action.index].visible = action.value;

      return {
        ...state,
        images: images
      };

    case UPDATE_UNLABELED_VISIBILITY:
      images = state.images.map(image => {
        if (image.category === null) {
          return {
            ...image,
            visible: !image.visible
          };
        } else {
          return image;
        }
      });
      return {
        ...state,
        images: images
      };

    case UPDATE_IMAGE_BRIGHTNESS:
      images = state.images.map(image => {
        if (image.identifier === action.imgId) {
          return {
            ...image,
            brightness: action.value
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
