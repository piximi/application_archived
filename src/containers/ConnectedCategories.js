import { connect } from 'react-redux';
import {
  deleteCategoryAction,
  updateCategoryVisibilityAction,
  displayThisCategoryOnlyAction
} from '../actions/categories';

import {
  updateImageVisibilityAction,
  updateImagesHavingCertainCategory
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
      dispatch(updateImagesHavingCertainCategory(identifier));
    },
    updateCategoryVisibility: (identifier, images, value) => {
      dispatch(updateCategoryVisibilityAction(identifier));
      for (let index in images.images) {
        if (images.images[index].category === identifier) {
          dispatch(updateImageVisibilityAction(index, value));
        }
      }
    },
    displayThisCategoryOnly: (identifier, images) => {
      dispatch(displayThisCategoryOnlyAction(identifier));

      for (let index in images.images) {
        if (images.images[index].category === identifier) {
          dispatch(updateImageVisibilityAction(index, true));
        } else {
          dispatch(updateImageVisibilityAction(index, false));
        }
      }
    }
  };
};

const ConnectedCategories = connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);

export default ConnectedCategories;
