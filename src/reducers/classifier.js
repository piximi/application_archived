import { CLASSIFIER_OPEN, CLASSIFIER_SAVE } from '../constants';

const classifier = (state = {}, action) => {
  switch (action.type) {
    case CLASSIFIER_OPEN:
      return {
        categories: [],
        images: [],
        settings: []
      };
    case CLASSIFIER_SAVE:
      return state.filter(category => {
        return category.identifier !== action.identifier;
      });

    default:
      return state;
  }
};

export default classifier;
