import { attr, Model } from 'redux-orm';

class Category extends Model {
  toString() {
    return `Category: ${this.description}`;
  }
}

Category.modelName = 'category';

Category.fields = {
  id: attr(),
  description: attr()
};

export default Category;
