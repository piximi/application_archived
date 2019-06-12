import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as tf from '@tensorflow/tfjs';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './i18n';
import { store, persistor } from '@piximi/store';

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

async function initializeModel() {
  const preloadedModel = await tf.loadLayersModel(
    'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json'
  );
  await preloadedModel.save('indexeddb://classifier');
}

export { store };
