import {
  CLOSE_CREATE_CATEGORY_DIALOG,
  CLOSE_SETTINGS_DIALOG,
  OPEN_CREATE_CATEGORY_DIALOG,
  OPEN_SETTINGS_DIALOG,
  TOGGLE_CREATE_CATEGORY_COLOR_MENU,
  TOGGLE_HELP_DIALOG,
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

export const openCreateCategoryDialogAction = sidebar => ({
  type: OPEN_CREATE_CATEGORY_DIALOG,
  sidebar
});

export const closeCreateCategoryDialogAction = sidebar => ({
  type: CLOSE_CREATE_CATEGORY_DIALOG,
  sidebar
});

export const toggleCreateCategoryColorMenuAction = settings => ({
  type: TOGGLE_CREATE_CATEGORY_COLOR_MENU,
  settings
});

export const toggleHelpDialogAction = settings => ({
  type: TOGGLE_HELP_DIALOG,
  settings
});

export const toggleSettingsDialogAction = () => ({
  type: TOGGLE_SETTINGS_DIALOG
});
