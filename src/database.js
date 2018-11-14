import Dexie from 'dexie';
import { store } from './index';
import { addImagesAction } from './actions/images';

const indexeddb = new Dexie('cyto');
// Save to database and when finished update Redux store
async function saveData(imageDataIndexedDB, imageDataReduxStore = null) {
  indexeddb.images
    .bulkPut(imageDataIndexedDB)
    .then(function() {
      if (imageDataReduxStore != null) {
        try {
          store.dispatch(addImagesAction(imageDataReduxStore));
        } catch (e) {
          console.error(
            e,
            'Could not save images to redux store, image data in indexeddb will be deleted'
          );
          indexeddb.delete();
        }
      }
    })
    .catch(Dexie.BulkError, function(e) {
      console.error(
        e +
          'Could not save images to indexeddb, due to that image data will also not be saved to redux store'
      );
    });
}

async function find(imgId) {
  const image = await indexeddb.images.get(imgId);

  return image;
}

function filter(images, checksum) {
  return images.filter(image => image.checksum === 0);
}

export { saveData, indexeddb, filter, find };
