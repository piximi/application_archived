import * as React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

describe('Logo', () => {
  it('should render', () => {
    const component = shallow(<Logo />);

    expect(component).toMatchSnapshot();
  });
});
