import { combineReducers } from 'redux';
import categories from './categories';
import images from './images';
import classifier from './classifier';
import settings from './settings';

const reducer = combineReducers({
  categories: categories,
  images: images,
  classifier: classifier,
  settings: settings
});

export default reducer;
