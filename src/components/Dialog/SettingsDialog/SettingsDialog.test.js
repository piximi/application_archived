import React from 'react';
import { shallow } from 'enzyme';
import SettingsDialog from './SettingsDialog';

describe('SettingsDialog', () => {
  it('should render correctly', () => {
    const component = shallow(<SettingsDialog />);
    expect(component).toMatchSnapshot();
  });
});
