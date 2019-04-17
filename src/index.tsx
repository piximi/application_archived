import './bootstrap';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as tf from '@tensorflow/tfjs';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import localforage from 'localforage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import './i18n';

// Initialization
const { store, persistor } = initializeRedux();

initializeModel();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

function initializeRedux() {
  const composeEnhancers = composeWithDevTools({
    // Specify custom devTools options
  });

  const persistConfig = {
    key: 'root',
    storage: localforage,
    stateReconciler: autoMergeLevel2
  };
  const persistedReducer = persistReducer(persistConfig, reducer);

  // TODO: start with empty project in the future

  const store = createStore(
    persistedReducer,
    composeEnhancers(
      applyMiddleware(thunk)
      // other store enhancers if any
    )
  );
  const persistor = persistStore(store);
  return { store, persistor };
}

async function initializeModel() {
  const preloadedModel = await tf.loadLayersModel(
    'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json'
  );
  await preloadedModel.save('indexeddb://classifier');
}

export { store };
