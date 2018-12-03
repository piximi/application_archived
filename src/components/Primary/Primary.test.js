import React from 'react';
import { shallow } from 'enzyme';
import Primary from './Primary';

describe('Primary', () => {
  it('should render correctly', () => {
    const component = shallow(<Primary />);
    expect(component).toMatchSnapshot();
  });
});
