import { attr, fk, Model } from 'redux-orm';

class Image extends Model {}

Image.modelName = 'image';

Image.fields = {
  category: fk('category', 'images'),
  checksum: attr(),
  data: attr(),
  id: attr()
};

export default Image;
