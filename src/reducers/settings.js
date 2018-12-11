import { TOOGLE_NEW_IMAGES_EVENT } from '../constants';

const settings = (state = {}, action) => {
  switch (action.type) {
    case TOOGLE_NEW_IMAGES_EVENT:
      return {
        ...state,
        uploadedNewImagesEvent: !state.uploadedNewImagesEvent
      };
    default:
      return state;
  }
};

export default settings;
