import { combineReducers } from 'redux';
import settings from './settings';
import classifier from './classifier';

const reducer = combineReducers({
  classifier: classifier,
  settings: settings
});

export default reducer;
