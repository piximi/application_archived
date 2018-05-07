import { CREATE_CATEGORY } from '../constants';

const initialState = {
  categories: [],
  images: [],
  settings: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };
    default:
      return state;
  }
};

export default rootReducer;
