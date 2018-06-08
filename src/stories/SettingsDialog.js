import React from 'react';
import { storiesOf } from '@storybook/react';
import SettingsDialog from '../components/SettingsDialog/SettingsDialog';

storiesOf('SettingsDialog', module).add('example', () => (
  <SettingsDialog open={true} />
));
