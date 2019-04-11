import { createAction, createReducer } from 'redux-starter-kit';

const createClassifier = createAction('classifiers/create');

const updateClassifierName = createAction('classifiers/update/name');

const classifiers = createReducer([], {
  [createClassifier]: (state, action) => {
    const classifier = action.payload;

    state.push(classifier);
  },
  [updateClassifierName]: (state, action) => {
    const { index, name } = action.payload;

    const classifier = state[index];

    classifier.name = name;
  }
});

export default classifiers;
