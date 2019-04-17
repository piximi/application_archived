import { FIT_CLASSIFIER, OPEN_CLASSIFIER, SAVE_CLASSIFIER } from '../constants';

export const openClassifierAction = (pathname: any) => ({
  type: OPEN_CLASSIFIER,
  pathname
});

export const fitClassifierAction = (pathname: string) => ({
  type: FIT_CLASSIFIER,
  pathname
});

export const saveClassifierAction = (pathname: any) => ({
  type: SAVE_CLASSIFIER,
  pathname
});
