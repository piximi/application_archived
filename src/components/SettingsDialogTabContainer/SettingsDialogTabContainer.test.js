import React from 'react';
import { shallow } from 'enzyme';
import SettingsDialogTabContainersDialog from './SettingsDialogTabContainer';

describe('SettingsDialogTabContainersDialog', () => {
  it('should render correctly', () => {
    const component = shallow(<SettingsDialogTabContainersDialog />);
    expect(component).toMatchSnapshot();
  });
});
