import React from 'react';
import { shallow } from 'enzyme';
import Categories from './Categories';

describe('Categories', () => {
  it('should render correctly', () => {
    const component = shallow(<Categories />);
    expect(component).toMatchSnapshot();
  });
});
