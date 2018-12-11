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
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import localforage from 'localforage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

// Initialization
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

function initializeRedux() {
  const persistConfig = {
    key: 'root',
    storage: localforage,
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
