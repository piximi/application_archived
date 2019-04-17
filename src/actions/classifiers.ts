import { NEW_CLASSIFIER } from '../constants';

export const newClassifierAction = (classifier: any) => ({
  type: NEW_CLASSIFIER,
  classifier
});
