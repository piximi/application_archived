import { TOGGLE_SPINNER } from '../constants';

const settings = (state = { spinnerActive: false }, action) => {
  switch (action.type) {
    case TOGGLE_SPINNER:
      return {
        spinnerActive: !state.spinnerActive
      };
    default:
      return state;
  }
};

export default settings;
