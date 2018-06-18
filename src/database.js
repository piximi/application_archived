import Dexie from 'dexie';

const database = new Dexie('cyto');

const createImage = (checksum, data) => {
  database.images.put({
    checksum: checksum,
    data: data
  });
};

const findImage = checksum => {
  database.images.get(checksum, image => {
    return image;
  });
};

export { createImage, database, findImage };
