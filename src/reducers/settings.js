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
  UPDATE_SETTING_SIDEBAR_OPEN
} from '../constants';

const settings = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_CREATE_CATEGORY_DIALOG:
      return {
        ...state,
        createCategory: {
          open: !state.createCategory.open
        }
      };
    case CLOSE_CREATE_CATEGORY_DIALOG:
      return {
        ...state,
        createCategory: {
          open: !state.createCategory.open
        }
      };
    case TOGGLE_DELETE_CATEGORY_DIALOG:
      return {
        ...state,
        deleteCategory: {
          toggled: !state.deleteCategory.toggled
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
    case TOGGLE_CATEGORIES_COLLAPSE:
      return {
        ...state,
        categories: {
          collapsed: !state.categories.collapsed
        }
      };
    case TOGGLE_MODEL_COLLAPSE:
      return {
        ...state,
        model: {
          collapsed: !state.model.collapsed
        }
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebar: {
          open: !state.sidebar.open
        }
      };
    case TOGGLE_UPLOAD_DIALOG:
      return {
        ...state,
        upload: {
          toggled: !state.upload.toggled
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
