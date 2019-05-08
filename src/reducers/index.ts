import { combineReducers } from 'redux';
import categories from './categories';
import images from './images';
import settings from './settings';
import classifier from './classifier';

const reducer = combineReducers({
  // categories: categories,
  // images: images,
  settings: settings,
  classifier: classifier
});

export default reducer;
