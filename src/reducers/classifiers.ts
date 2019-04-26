import { createAction, createReducer } from 'redux-starter-kit';

export const createClassifierAction = createAction('classifiers/create');

export const updateClassifierNameAction = createAction(
  'classifiers/update/name'
);

type Classifier = {
  name: string;
};

const initialState: Classifier[] = [];

const classifiers = createReducer(initialState, {
  [createClassifierAction.toString()]: (state, action) => {
    const classifier = action.payload;

    state.push(classifier);
  },
  [updateClassifierNameAction.toString()]: (state, action) => {
    const { index, name } = action.payload;

    const classifier = state[index];

    classifier.name = name;
  }
});

export default classifiers;
