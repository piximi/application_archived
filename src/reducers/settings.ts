import { createAction, createReducer } from 'redux-starter-kit';
import { Settings } from '../types';

export const updateSpinnerSpinningAction = createAction(
  'update-spinner-spinning'
);

const initialState: Settings = {
  spinner: {
    spinning: false
  }
};

const settings = createReducer(initialState, {
  [updateSpinnerSpinningAction.toString()]: (state, action) => {
    state.spinner.spinning = !state.spinner.spinning;
  }
});

export default settings;
