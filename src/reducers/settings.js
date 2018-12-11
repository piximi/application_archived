import { TOGGLE_UPLOAD_DIALOG, TOOGLE_NEW_IMAGES_EVENT } from '../constants';

const settings = (state = {}, action) => {
  switch (action.type) {
    case TOOGLE_NEW_IMAGES_EVENT:
      return {
        ...state,
        uploadedNewImagesEvent: !state.uploadedNewImagesEvent
      };
    case TOGGLE_UPLOAD_DIALOG:
      return {
        ...state,
        upload: {
          toggled: !state.upload.toggled
        }
      };
    default:
      return state;
  }
};

export default settings;
