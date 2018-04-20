import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from 'material-ui';
import CytoAppBar from '../CytoAppBar';

storiesOf('CytoAppBar', module).add('default', () => <CytoAppBar />);
