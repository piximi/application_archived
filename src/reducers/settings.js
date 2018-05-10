import {
  UPDATE_SETTING_SIDEBAR_OPEN,
  UPDATE_SETTING_COLUMNS
} from '../constants';

const settings = (state = {}, action) => {
  switch (action.type) {
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
