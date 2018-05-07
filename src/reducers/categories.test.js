import categories from './categories';
import { CREATE_CATEGORY } from '../constants';

describe('categories', () => {
  it('should return the initial state', () => {
    expect(categories(undefined, {})).toEqual([]);
  });

  it('should CREATE_CATEGORY', () => {
    const category = {
      name: 'example'
    };

    expect(
      categories([], {
        type: CREATE_CATEGORY,
        category
      })
    ).toEqual([
      {
        name: 'example'
      }
    ]);
  });
});
