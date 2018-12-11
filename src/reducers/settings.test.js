import settings from './settings';

describe('settings', () => {
  it('should return the initial state', () => {
    expect(settings(undefined, {})).toEqual({});
  });
});
