import {
  CLOSE_CREATE_CATEGORY_DIALOG,
  OPEN_CREATE_CATEGORY_DIALOG,
  TOGGLE_CREATE_CATEGORY_COLOR_MENU,
  TOGGLE_HELP_DIALOG,
  TOGGLE_SETTINGS_DIALOG,
  UPDATE_SETTING_COLUMNS,
  UPDATE_SETTING_SIDEBAR_OPEN
} from '../constants';

const settings = (state = {}, action) => {
  switch (action.type) {
    case CLOSE_CREATE_CATEGORY_DIALOG:
      return {
        ...state,
        createCategory: {
          open: !state.createCategory.open
        }
      };
    case TOGGLE_SETTINGS_DIALOG:
      return {
        ...state,
        settings: {
          open: !state.settings.open
        }
      };
    case OPEN_CREATE_CATEGORY_DIALOG:
      return {
        ...state,
        createCategory: {
          open: !state.createCategory.open
        }
      };
    case TOGGLE_CREATE_CATEGORY_COLOR_MENU:
      return {
        ...state,
        createCategory: {
          ...state.createCategory,
          color: {
            open: !state.createCategory.color.open
          }
        }
      };
    case TOGGLE_HELP_DIALOG:
      return {
        ...state,
        help: {
          open: !state.help.open
        }
      };
    case UPDATE_SETTING_COLUMNS:
      return {
        ...state,
        columns: action.columns
      };
    case UPDATE_SETTING_SIDEBAR_OPEN:
      return {
        ...state,
        sidebar: {
          open: !state.sidebar.open
        }
      };
    default:
      return state;
  }
};

export default settings;
