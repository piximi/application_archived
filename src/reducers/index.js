import { combineReducers } from 'redux';

import categories from './categories';
import images from './images';

const reducer = combineReducers({
  categories: categories,
  images: images
});

export default reducer;
