import { connect } from 'react-redux';

import {
  deleteCategoryAction,
  updateCategoryDescriptionAction,
  updateCategoryVisibilityAction
} from '../actions/categories';
import Category from '../components/Category';

import { updateImagesHavingCertainCategory } from '../actions/images';

const mapStateToProps = (state, props) => {
  return state.categories.find(
    category => props.identifier === category.identifier
  );
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteCategory: event => {
      const identifier = props.identifier;
      dispatch(deleteCategoryAction(identifier));
      dispatch(updateImagesHavingCertainCategory(identifier));
    },
    updateCategoryDescription: event => {
      const identifier = props.identifier;
      const description = event.target.value;
      dispatch(updateCategoryDescriptionAction(identifier, description));
    },
    updateCategoryVisibility: () => {
      const identifier = props.identifier;
      dispatch(updateCategoryVisibilityAction(identifier));
    }
  };
};

const ConnectedCategory = connect(mapStateToProps, mapDispatchToProps)(
  Category
);

export default ConnectedCategory;
