import React from 'react';
import { storiesOf } from '@storybook/react';
import Categories from '../components/Categories';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import data from '../images/mnist';
import reducer from '../reducers';
import dataImages from '../images/stock';

const fixture = {
  categories: data.categories,
  images: {
    images: dataImages.images,
    imageByteStrings: dataImages.imageByteStrings
  },
  settings: data.settings
};

const store = createStore(reducer, fixture);

storiesOf('Categories', module).add('example', () => (
  <Provider store={store}>
    <Categories />
  </Provider>
));
