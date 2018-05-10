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
