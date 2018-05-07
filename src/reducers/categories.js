import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY_VISIBILITY
} from '../constants';

const categories = (state = [], action) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      return [...state, action.payload];
    case DELETE_CATEGORY:
      return state.filter(category => {
        return category.identifier !== action.identifier;
      });
    case UPDATE_CATEGORY_VISIBILITY:
      state.map(category => {
        if (category.identifier === action.identifier) {
          return {
            ...category,
            visible: !category.visible
          };
        } else {
          return category;
        }
      });
    default:
      return state;
  }
};

export default categories;
