import React from 'react';
import { shallow } from 'enzyme';
import Settings from './Settings';

describe('Settings', () => {
  it('should render correctly', () => {
    const component = shallow(<Settings />);
    expect(component).toMatchSnapshot();
  });
});
