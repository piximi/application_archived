import { CREATE_CATEGORY, DELETE_CATEGORY } from '../constants';

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
    default:
      return state;
  }
};

export default reducer;
