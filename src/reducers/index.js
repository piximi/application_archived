import { combineReducers } from 'redux';

import categories from './categories';
import images from './images';
import settings from './settings';

const reducer = combineReducers({
  categories: categories,
  images: images,
  settings: settings
});

export default reducer;
