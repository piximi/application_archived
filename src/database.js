import Dexie from 'dexie';

const database = new Dexie('cyto');

async function saveToDatabase(checksum, imageData) {
  database.images.put({
    checksum: checksum,
    data: imageData
  });
}

export { saveToDatabase, database };
