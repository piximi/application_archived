import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import data from './images/mnist';
import dataImages from './images/stock';
import reducer from './reducers';
import createRavenMiddleware from 'raven-for-redux';
import Dexie from 'dexie';

const database = new Dexie('cyto');

database.version(1).stores({
  images: '++id, data'
});

const demo = {
  categories: data.categories,
  images: {
    images: dataImages.images,
    imageByteStrings: dataImages.imageByteStrings
  },
  settings: data.settings
};

const store = createStore(
  reducer,
  demo,
  applyMiddleware(
    createRavenMiddleware(window.Raven, {
      environment: 'production'
    })
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

export { store };
