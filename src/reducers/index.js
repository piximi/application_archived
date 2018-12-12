import { combineReducers } from 'redux';
import categories from './categories';
import images from './images';
import classifier from './classifier';

const reducer = combineReducers({
  categories: categories,
  images: images,
  classifier: classifier
});

export default reducer;
