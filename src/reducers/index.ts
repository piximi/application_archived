import { combineReducers } from 'redux';
import settings from './settings';
import classifier from './classifier';

const reducer = combineReducers({
  settings: settings,
  classifier: classifier
});

export default reducer;
