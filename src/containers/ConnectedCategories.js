import { connect } from 'react-redux';
import {
  updateCategoryVisibilityAction,
  displayThisCategoryOnlyAction
} from '../actions/categories';

import {
  updateImageVisibilityBasedOnCategoryAction,
  onlyShowImagesWithCertainCategoryAction
} from '../actions/images';

import SidebarCategoriesList from '../components/SidebarDrawer/SidebarCategoriesList/SidebarCategoriesList';

const mapStateToProps = (state, props) => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    updateCategoryVisibility: (identifier, value) => {
      dispatch(updateCategoryVisibilityAction(identifier));
      dispatch(updateImageVisibilityBasedOnCategoryAction(identifier, value));
    },

    displayThisCategoryOnly: identifier => {
      dispatch(displayThisCategoryOnlyAction(identifier));
      dispatch(onlyShowImagesWithCertainCategoryAction(identifier));
    }
  };
};

const ConnectedCategories = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarCategoriesList);

export default ConnectedCategories;
