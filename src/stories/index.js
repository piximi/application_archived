import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from 'material-ui';

storiesOf('Button', module)
  .add('with text', () => (
    <Button color="primary" onClick={action('clicked')} variant="raised">
      Hello, world!
    </Button>
  ))
  .add('with some emoji', () => (
    <Button color="primary" onClick={action('clicked')} variant="raised">
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
