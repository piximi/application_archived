import { CLASSIFIER_OPEN, CLASSIFIER_SAVE } from '../constants';

const categories = (state = [], action) => {
  switch (action.type) {
    case CLASSIFIER_OPEN:
      return [...state, action.category];
    case CLASSIFIER_SAVE:
      return state.filter(category => {
        return category.identifier !== action.identifier;
      });
    default:
      return state;
  }
};

export default categories;
