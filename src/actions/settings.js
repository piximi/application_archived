import {
  UPDATE_SETTING_COLUMNS,
  UPDATE_SETTING_SIDEBAR_OPEN
} from '../constants';

export const updateSettingColumns = columns => ({
  type: 'UPDATE_SETTING_COLUMNS',
  columns
});

export const updateSettingSidebarOpenAction = sidebar => ({
  type: 'UPDATE_SETTING_SIDEBAR_OPEN',
  sidebar
});

export const openSettingsDialogAction = sidebar => ({
  type: 'OPEN_SETTINGS_DIALOG',
  sidebar
});

export const closeSettingsDialogAction = sidebar => ({
  type: 'CLOSE_SETTINGS_DIALOG',
  sidebar
});

export const openCreateCategoryDialogAction = sidebar => ({
  type: 'OPEN_CREATE_CATEGORY_DIALOG',
  sidebar
});

export const closeCreateCategoryDialogAction = sidebar => ({
  type: 'CLOSE_CREATE_CATEGORY_DIALOG',
  sidebar
});
