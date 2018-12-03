import React from 'react';
import { shallow } from 'enzyme';
import HelpDialog from './HelpDialog';

describe('HelpDialog', () => {
  it('should render correctly', () => {
    const component = shallow(<HelpDialog />);
    expect(component).toMatchSnapshot();
  });
});
