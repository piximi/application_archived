import {
  ADD_CATEGORIES,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY_DESCRIPTION,
  UPDATE_CATEGORY_COLOR,
  UPDATE_CATEGORY_VISIBILITY
} from '../constants';

const categories = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORIES:
      return action.categories;

    case CREATE_CATEGORY:
      return [...state, action.category];
    case DELETE_CATEGORY:
      return state.filter(category => {
        return category.identifier !== action.identifier;
      });
    case UPDATE_CATEGORY_DESCRIPTION:
      return state.map(category => {
        if (category.identifier === action.identifier) {
          return {
            ...category,
            description: action.description
          };
        } else {
          return category;
        }
      });
    case UPDATE_CATEGORY_COLOR:
      return state.map(category => {
        if (category.identifier === action.identifier) {
          return {
            ...category,
            color: action.color
          };
        } else {
          return category;
        }
      });
    case UPDATE_CATEGORY_VISIBILITY:
      return state.map(category => {
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
