import { NEW_CLASSIFIER } from '../constants';

export const newClassifierAction = classifier => ({
  type: NEW_CLASSIFIER,
  classifier
});
