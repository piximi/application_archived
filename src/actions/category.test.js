import { createCategory, deleteCategory } from './category';
import { CREATE_CATEGORY, DELETE_CATEGORY } from '../constants';

describe('category actions', () => {
  it('should create an action to create a new category', () => {
    const category = {
      description: 'example'
    };

    const expectedAction = {
      type: CREATE_CATEGORY,
      category
    };

    expect(createCategory(category)).toEqual(expectedAction);
  });

  it('should create an action to delete an existing category', () => {
    const identifier = '16e0e1b8-ae79-46f5-80cf-58e7f8dda344';

    const expectedAction = {
      type: DELETE_CATEGORY,
      identifier
    };

    expect(deleteCategory(identifier)).toEqual(expectedAction);
  });
});
