import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import Categories from '../components/Categories';
import { Grid, Paper } from 'material-ui';
import MNIST from '../images/mnist.json';
import Category from '../components/Category';

storiesOf('Categories', module).add('default', () => (
  <Grid container spacing={24}>
    <Grid item xs={3}>
      <Categories categories={MNIST.categories} />
    </Grid>
  </Grid>
));

storiesOf('Sample', module).add('default', () => (
  <Grid container spacing={24}>
    <Grid item xs={3}>
      <Category />
    </Grid>
  </Grid>
));
