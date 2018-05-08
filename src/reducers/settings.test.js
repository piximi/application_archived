import settings from './settings';
import { UPDATE_SETTING_COLUMNS } from '../constants';

describe('settings', () => {
  it('should return the initial state', () => {
    expect(settings(undefined, {})).toEqual({});
  });

  it('should UPDATE_SETTING_COLUMNS', () => {
    expect(settings({}, { type: UPDATE_SETTING_COLUMNS, columns: 12 })).toEqual(
      { columns: 12 }
    );
  });
});
