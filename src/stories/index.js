import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import Categories from '../components/Categories';
import { Grid, Paper } from 'material-ui';
import MNIST from '../images/mnist.json';
import ConnectedCategories from '../containers/ConnectedCategories';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import { createStore } from 'redux';

const store = createStore(reducer);

storiesOf('Categories', module).add('default', () => (
  <Grid container spacing={24}>
    <Grid item xs={4}>
      <Provider store={store}>
        <ConnectedCategories categories={MNIST.categories} />
      </Provider>
    </Grid>
  </Grid>
));

storiesOf('Image', module).add('default', () => (
  <Grid container spacing={24}>
    <Grid item xs={3}>
      <Category />
    </Grid>
  </Grid>
));
