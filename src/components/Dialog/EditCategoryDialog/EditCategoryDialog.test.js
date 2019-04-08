import React from 'react';
import { shallow } from 'enzyme';
import EditCategoryDialog from './EditCategoryDialog';

describe('EditCategoryDialog', () => {
  it('should render correctly', () => {
    const component = shallow(<EditCategoryDialog />);
    expect(component).toMatchSnapshot();
  });
});
