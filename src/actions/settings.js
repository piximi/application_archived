import {
  CLOSE_CREATE_CATEGORY_DIALOG,
  TOGGLE_CATEGORIES_COLLAPSE,
  TOGGLE_CREATE_CATEGORY_COLOR_MENU,
  TOGGLE_CREATE_CATEGORY_DIALOG,
  TOGGLE_DELETE_CATEGORY_DIALOG,
  TOGGLE_MODEL_COLLAPSE,
  TOGGLE_SIDEBAR,
  TOGGLE_UPLOAD_DIALOG,
  UPDATE_SETTING_COLUMNS,
  UPDATE_ZOOM_LEVEL
} from '../constants';

export const updateSettingColumnsAction = columns => ({
  type: UPDATE_SETTING_COLUMNS,
  columns
});

export const closeCreateCategoryDialogAction = sidebar => ({
  type: CLOSE_CREATE_CATEGORY_DIALOG,
  sidebar
});

export const toggleCreateCategoryColorMenuAction = settings => ({
  type: TOGGLE_CREATE_CATEGORY_COLOR_MENU,
  settings
});

export const toggleCreateCategoryDialogAction = () => ({
  type: TOGGLE_CREATE_CATEGORY_DIALOG
});

export const toggleCategoriesCollapseAction = () => ({
  type: TOGGLE_CATEGORIES_COLLAPSE
});

export const toggleDeleteCategoryDialogAction = () => ({
  type: TOGGLE_DELETE_CATEGORY_DIALOG
});

export const toggleModelCollapseAction = () => ({
  type: TOGGLE_MODEL_COLLAPSE
});

export const toggleSidebarAction = () => ({
  type: TOGGLE_SIDEBAR
});

export const toggleUploadDialogAction = () => ({
  type: TOGGLE_UPLOAD_DIALOG
});

export const updateZoomLevelAction = value => ({
  type: UPDATE_ZOOM_LEVEL,
  value
});
