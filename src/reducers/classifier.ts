import { createAction, createReducer } from 'redux-starter-kit';
import { Classifier } from '../types';

export const createClassifierAction = createAction(
  'classifiers/create-classifier'
);

export const updateClassifierNameAction = createAction(
  'classifiers/update-classifier-name'
);

const initialState: Classifier = {
  name: 'Untitled classifier'
};

const classifier = createReducer(initialState, {
  [createClassifierAction.toString()]: (state, action) => {
    state = action.payload;
  },
  [updateClassifierNameAction.toString()]: (state, action) => {
    const { name } = action.payload;

    state.name = name;
  }
});

export default classifier;
