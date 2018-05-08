import { UPDATE_SETTING_COLUMNS } from '../constants';

const settings = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SETTING_COLUMNS:
      return {
        ...state,
        columns: action.columns
      };
    default:
      return state;
  }
};

export default settings;
