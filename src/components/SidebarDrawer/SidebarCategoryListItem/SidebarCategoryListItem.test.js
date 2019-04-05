import React from 'react';
import { shallow } from 'enzyme';
import Category from './SidebarCategoryListItem';

describe('Category', () => {
  it('should render correctly', () => {
    const component = shallow(<Category />);
    expect(component).toMatchSnapshot();
  });
});
