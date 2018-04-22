import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import Categories from '../components/Categories';
import Samples from '../components/Samples';
import { Grid, Paper } from 'material-ui';
import data from '../images/mnist.json';

storiesOf('Categories', module).add('default', () => (
  <Grid container spacing={0}>
    <Grid item xs={4}>
      <Categories />
    </Grid>
  </Grid>
));

storiesOf('Samples', module).add('default', () => (
  <Grid container spacing={24}>
    <Grid item xs={8}>
      <Samples samples={data} />
    </Grid>
  </Grid>
));
