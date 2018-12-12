import { connect } from 'react-redux';
import {
  deleteCategoryAction,
  updateCategoryVisibilityAction,
  displayThisCategoryOnlyAction
} from '../actions/categories';

import {
  updateImageVisibilityAction,
  onlyShowImagesWithCertainCategory,
  updateImagesHavingCertainCategoryAction
} from '../actions/images';

import Categories from '../components/Categories/Categories';

const mapStateToProps = (state, props) => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteCategory: event => {
      const identifier = props.identifier;
      dispatch(deleteCategoryAction(identifier));
      dispatch(updateImagesHavingCertainCategoryAction(identifier));
    },
    updateCategoryVisibility: (identifier, images, value) => {
      dispatch(updateCategoryVisibilityAction(identifier));
      for (let key in images.images) {
        if (images.images[key].category === identifier) {
          dispatch(updateImageVisibilityAction(key, value));
        }
      }
    },
    displayThisCategoryOnly: identifier => {
      dispatch(displayThisCategoryOnlyAction(identifier));
      dispatch(onlyShowImagesWithCertainCategory(identifier));
    }
  };
};

const ConnectedCategories = connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);

export default ConnectedCategories;
