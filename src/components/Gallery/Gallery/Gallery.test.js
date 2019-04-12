import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './Gallery';

describe('Gallery', () => {
  it('should render correctly', () => {
    const component = shallow(<Gallery images={[]} />);
    expect(component).toMatchSnapshot();
  });
});
