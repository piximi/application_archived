import { UPDATE_CATEGORY_AND_PROBABILITY } from '../constants';

//Call to set predictions
export const updateCategoryAndProbabilityAction = (predictions: {}) => ({
  type: UPDATE_CATEGORY_AND_PROBABILITY,
  predictions
});
