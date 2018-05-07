import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY_VISIBILITY
} from '../constants';

const initialState = {
  categories: [],
  images: [],
  settings: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(category => {
          return category.identifier !== action.identifier;
        })
      };
    case UPDATE_CATEGORY_VISIBILITY:
      return {
        ...state,
        categories: state.categories.map(category => {
          if (category.identifier === action.identifier) {
            return {
              ...category,
              visible: !category.visible
            };
          } else {
            return category;
          }
        })
      };
    default:
      return state;
  }
};

export default reducer;
