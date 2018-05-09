import { FIT_CLASSIFIER, OPEN_CLASSIFIER, SAVE_CLASSIFIER } from '../constants';

export const openClassifierAction = pathname => ({
  type: 'OPEN_CLASSIFIER',
  pathname
});

export const fitClassifierAction = pathname => ({
  type: 'FIT_CLASSIFIER',
  pathname
});

export const saveClassifierAction = pathname => ({
  type: 'SAVE_CLASSIFIER',
  pathname
});
