import Dexie from 'dexie';

const database = new Dexie('cyto');

database.version(1).stores({
  images: 'checksum, data'
});

export { database };
