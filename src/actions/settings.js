import {
  CHANGE_SETTINGS_DIALOG_TAB,
  CLOSE_CREATE_CATEGORY_DIALOG,
  TOGGLE_CREATE_CATEGORY_COLOR_MENU,
  TOGGLE_CREATE_CATEGORY_DIALOG,
  TOGGLE_CATEGORIES_COLLAPSE,
  TOGGLE_HELP_DIALOG,
  TOGGLE_MODEL_COLLAPSE,
  TOGGLE_SEND_FEEDBACK_DIALOG,
  TOGGLE_SETTINGS_DIALOG,
  UPDATE_SETTING_COLUMNS,
  UPDATE_SETTING_SIDEBAR_OPEN
} from '../constants';

export const updateSettingColumns = columns => ({
  type: UPDATE_SETTING_COLUMNS,
  columns
});

export const updateSettingSidebarOpenAction = sidebar => ({
  type: UPDATE_SETTING_SIDEBAR_OPEN,
  sidebar
});

export const closeCreateCategoryDialogAction = sidebar => ({
  type: CLOSE_CREATE_CATEGORY_DIALOG,
  sidebar
});

export const changeSettingsDialogTabAction = index => ({
  type: CHANGE_SETTINGS_DIALOG_TAB,
  index
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

export const toggleHelpDialogAction = () => ({
  type: TOGGLE_HELP_DIALOG
});

export const toggleModelCollapseAction = () => ({
  type: TOGGLE_MODEL_COLLAPSE
});

export const toggleSendFeedbackDialogAction = () => ({
  type: TOGGLE_SEND_FEEDBACK_DIALOG
});

export const toggleSettingsDialogAction = () => ({
  type: TOGGLE_SETTINGS_DIALOG
});
