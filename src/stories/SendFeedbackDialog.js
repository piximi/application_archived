import React from 'react';
import { storiesOf } from '@storybook/react';
import SendFeedbackDialog from '../components/SendFeedbackDialog/SendFeedbackDialog';

storiesOf('SendFeedbackDialog', module).add('example', () => (
  <SendFeedbackDialog open={true} />
));
