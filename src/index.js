import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import data from './images/subpopulation_small';
import dataImages from './images/subpop';
import reducer from './reducers';
import { createImage, database } from './database';

database.version(1).stores({
  images: '&checksum'
});

const demo = {
  categories: data.categories,
  images: {
    images: dataImages.images,
    imageByteStrings: dataImages.imageByteStrings
  },
  settings: data.settings
};

const strings = dataImages.imageByteStrings;

for (const string in strings) {
  const checksum = string;

  createImage(checksum, strings[checksum]);
}

const store = createStore(reducer, demo);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

export { store };
