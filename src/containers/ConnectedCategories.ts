import { connect } from 'react-redux';
import {
  updateCategoryVisibility,
  soloCategoryAction
} from '../reducers/categories';

import {
  // updateImageVisibilityBasedOnCategoryAction,
  onlyShowImagesWithCertainCategoryAction
} from '../actions/images';

import SidebarCategoriesList from '../components/SidebarDrawer/SidebarCategoriesList/SidebarCategoriesList';

const mapStateToProps = (state: any, props: any) => {
  return state;
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    updateVisibility: (index: any) => {
      const payload = {index: index};

      dispatch(updateCategoryVisibility(payload));

      // dispatch(updateImageVisibilityBasedOnCategoryAction(index, value));
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
