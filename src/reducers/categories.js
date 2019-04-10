import {
  ADD_CATEGORIES,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  DISPLAY_THIS_CATEGORY_ONLY,
  UPDATE_CATEGORY_DESCRIPTION,
  UPDATE_CATEGORY_COLOR,
  UPDATE_CATEGORY_VISIBILITY
} from '../constants';

const categories = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORIES:
      const unlabeled = {
        color: '#F8F8F8',
        description: 'Unlabeled',
        identifier: null,
        index: '-1',
        visible: true
      };
      let categories = [...action.categories];
      categories.unshift(unlabeled);
      return categories;

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
    case DISPLAY_THIS_CATEGORY_ONLY:
      return state.map(category => {
        if (category.identifier === action.identifier) {
          return {
            ...category,
            visible: true
          };
        } else {
          return {
            ...category,
            visible: false
          };
        }
      });
    default:
      return state;
  }
};

export default categories;
