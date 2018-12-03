import React from 'react';
import { shallow } from 'enzyme';
import Category from './Category';

describe('Category', () => {
  it('should render correctly', () => {
    const component = shallow(<Category />);
    expect(component).toMatchSnapshot();
  });
});
