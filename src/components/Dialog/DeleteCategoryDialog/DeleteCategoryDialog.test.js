import React from 'react';
import { shallow } from 'enzyme';
import DeleteCategoryDialog from './DeleteCategoryDialog';

describe('DeleteCategoryDialogonent', () => {
  it('should render correctly', () => {
    const component = shallow(<DeleteCategoryDialog />);
    expect(component).toMatchSnapshot();
  });
});
