import React from 'react';
import { shallow } from 'enzyme';
import SendFeedbackDialog from './SendFeedbackDialog';

describe('SendFeedbackDialog', () => {
  it('should render correctly', () => {
    const component = shallow(<SendFeedbackDialog />);
    expect(component).toMatchSnapshot();
  });
});
