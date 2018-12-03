import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker', () => {
  it('should render correctly', () => {
    const component = shallow(<ColorPicker />);
    expect(component).toMatchSnapshot();
  });
});
