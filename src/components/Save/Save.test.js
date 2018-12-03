import React from 'react';
import { shallow } from 'enzyme';
import Save from './Save';

describe('Save', () => {
  it('should render correctly', () => {
    const component = shallow(<Save />);
    expect(component).toMatchSnapshot();
  });
});
