import categories from './categories';
import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY_DESCRIPTION,
  UPDATE_CATEGORY_VISIBILITY
} from '../constants';

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

  it('should DELETE_CATEGORY', () => {
    const identifier = '16e0e1b8-ae79-46f5-80cf-58e7f8dda344';

    expect(
      categories(
        [
          {
            identifier: identifier
          }
        ],
        {
          type: DELETE_CATEGORY,
          identifier
        }
      )
    ).toEqual([]);
  });

  it('should UPDATE_CATEGORY_DESCRIPTION', () => {
    const identifier = '16e0e1b8-ae79-46f5-80cf-58e7f8dda344';

    expect(
      categories(
        [
          {
            identifier: identifier,
            description: 'foo'
          }
        ],
        {
          type: UPDATE_CATEGORY_DESCRIPTION,
          identifier: identifier,
          description: 'bar'
        }
      )
    ).toEqual([
      {
        identifier: identifier,
        description: 'bar'
      }
    ]);
  });

  it('should UPDATE_CATEGORY_VISIBILITY', () => {
    const identifier = '16e0e1b8-ae79-46f5-80cf-58e7f8dda344';

    expect(
      categories(
        [
          {
            identifier: identifier,
            visible: true
          }
        ],
        {
          type: UPDATE_CATEGORY_VISIBILITY,
          identifier
        }
      )
    ).toEqual([
      {
        identifier: identifier,
        visible: false
      }
    ]);
  });
});
