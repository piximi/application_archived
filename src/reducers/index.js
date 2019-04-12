import { combineReducers } from 'redux';
import categories from './categories';
import images from './images';
import classifier from './classifier';
import settings from './settings';
import classifiers from './classifiers';

const reducer = combineReducers({
  categories: categories,
  images: images,
  classifier: classifier,
  settings: settings,
  classifiers: classifiers
});

export default reducer;
