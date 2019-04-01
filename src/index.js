import React from 'react';
import * as tf from '@tensorflow/tfjs';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
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
    'https://weights.cyto.ai/mobilenet/model.json'
  );
  await preloadedModel.save('indexeddb://classifier');
}

export { store };
