import {
  TOGGLE_CREATE_CATEGORY_DIALOG,
  TOGGLE_DELETE_CATEGORY_DIALOG,
  TOGGLE_UPLOAD_DIALOG,
  TOOGLE_NEW_IMAGES_EVENT
} from '../constants';

export const toggleCreateCategoryDialogAction = () => ({
  type: TOGGLE_CREATE_CATEGORY_DIALOG
});

export const toggleDeleteCategoryDialogAction = () => ({
  type: TOGGLE_DELETE_CATEGORY_DIALOG
});

export const toggleUploadDialogAction = () => ({
  type: TOGGLE_UPLOAD_DIALOG
});

export const toggleNewImagesEventAction = () => ({
  type: TOOGLE_NEW_IMAGES_EVENT
});
