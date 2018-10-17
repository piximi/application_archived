import React from 'react';
import * as tensorflow from '@tensorflow/tfjs';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import data from './images/subpopulation_small';
import dataImages from './images/subpop';
import reducer from './reducers';
import * as databaseAPI from './database';

// Initialization
initializeDatabase();
const store = initializeRedux();
initializeModel();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

function initializeDatabase() {
  databaseAPI.indexeddb.version(1).stores({
    images: '&checksum, bytes'
  });
  const imageDataIndexedDB = dataImages.images.map(image => {
    return {
      checksum: image.identifier,
      bytes: dataImages.imageByteStrings[image.identifier]
    };
  });
  databaseAPI.saveData(imageDataIndexedDB);
}

function initializeRedux() {
  const demo = {
    categories: data.categories,
    images: {
      images: dataImages.images
    },
    settings: data.settings
  };
  const store = createStore(reducer, demo);
  return store;
}

async function initializeModel() {
  const preloadedModel = await tensorflow.loadModel(
    'https://weights.cyto.ai/mobilenet/model.json'
  );
  await preloadedModel.save('indexeddb://my-model-1');
}

export { store };
