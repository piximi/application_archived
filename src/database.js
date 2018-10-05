import Dexie from 'dexie';
import { store } from './index';
import { addImagesAction } from './actions/images';

const database = new Dexie('cyto');
// Save to database and when finished update Redux store
async function saveData(imageDataIndexedDB, imageDataReduxStore = null) {
  database.images.bulkPut(imageDataIndexedDB).then(function() {
    if (imageDataReduxStore != null) {
      store.dispatch(addImagesAction(imageDataReduxStore));
    }
  });
}

export { saveData, database };
