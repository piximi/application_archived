import { attr, Model } from 'redux-orm';

class Category extends Model {
  toString() {
    return `Category: ${this.description}`;
  }
}

Category.modelName = 'category';

Category.fields = {
  color: attr(),
  description: attr(),
  id: attr()
};

export default Category;
