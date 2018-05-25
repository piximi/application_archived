import {
  UPDATE_SETTING_COLUMNS,
  UPDATE_SETTING_SIDEBAR_OPEN,
  OPEN_SETTINGS_DIALOG,
  CLOSE_SETTINGS_DIALOG,
  OPEN_CREATE_CATEGORY_DIALOG,
  CLOSE_CREATE_CATEGORY_DIALOG,
  TOGGLE_CREATE_CATEGORY_COLOR_MENU,
  TOGGLE_HELP_DIALOG
} from '../constants';

export const updateSettingColumns = columns => ({
  type: UPDATE_SETTING_COLUMNS,
  columns
});

export const updateSettingSidebarOpenAction = sidebar => ({
  type: UPDATE_SETTING_SIDEBAR_OPEN,
  sidebar
});

export const openSettingsDialogAction = sidebar => ({
  type: OPEN_SETTINGS_DIALOG,
  sidebar
});

export const closeSettingsDialogAction = sidebar => ({
  type: CLOSE_SETTINGS_DIALOG,
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
