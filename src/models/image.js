import { attr, Model } from 'redux-orm';

class Image extends Model {}

Image.modelName = 'image';

Image.fields = {
  id: attr()
};

export default Image;
