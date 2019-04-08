import React from 'react';
import { storiesOf } from '@storybook/react';
import { ConfusionMatrix } from '../components/Graph/ConfusionMatrix/ConfusionMatrix';

storiesOf('ConfusionMatrix', module).add('default', () => <ConfusionMatrix />);
