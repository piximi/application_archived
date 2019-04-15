import { connect } from 'react-redux';
import {
  updateCategoryVisibilityAction,
  soloCategoryAction
} from '../reducers/categories';

import {
  updateImageVisibilityBasedOnCategoryAction,
  onlyShowImagesWithCertainCategoryAction
} from '../actions/images';

import SidebarCategoriesList from '../components/SidebarDrawer/SidebarCategoriesList/SidebarCategoriesList';

const mapStateToProps = (state: any, props: any) => {
  return state;
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    updateCategoryVisibility: (identifier: any, value: any) => {
      dispatch(updateCategoryVisibilityAction(identifier));
      dispatch(updateImageVisibilityBasedOnCategoryAction(identifier, value));
    },
    displayThisCategoryOnly: (identifier: any) => {
      dispatch(soloCategoryAction(identifier));
      dispatch(onlyShowImagesWithCertainCategoryAction(identifier));
    }
  };
};

const ConnectedCategories = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarCategoriesList);

export default ConnectedCategories;
