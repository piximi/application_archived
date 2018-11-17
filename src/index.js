import React from 'react';
import * as tensorflow from '@tensorflow/tfjs';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import data from './images/BBC021';
import dataImages from './images/BBC021';
import reducer from './reducers';
import * as databaseAPI from './database';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

// Initialization
initializeDatabase();
const { store, persistor } = initializeRedux();
initializeModel();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
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
  const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    stateReconciler: autoMergeLevel2
  };
  const persistedReducer = persistReducer(persistConfig, reducer);

  // TODO: start with empty project in the future
  const demo = {
    categories: data.categories,
    images: {
      images: dataImages.images
    },
    settings: data.settings
  };

  const store = createStore(persistedReducer, demo);
  const persistor = persistStore(store);
  return { store, persistor };
}

async function initializeModel() {
  const preloadedModel = await tensorflow.loadModel(
    'https://weights.cyto.ai/mobilenet/model.json'
  );
  await preloadedModel.save('indexeddb://classifier');
}

export { store };
