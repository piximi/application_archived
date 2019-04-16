import { connect } from 'react-redux';
import {
  updateCategoryVisibilityAction,
  toggleCategoryVisibilityAction
} from '../reducers/categories';

import {
  // updateImageVisibilityBasedOnCategoryAction,
  onlyShowImagesWithCertainCategoryAction
} from '../actions/images';

import SidebarCategoriesList from '../components/SidebarDrawer/SidebarCategoriesList/SidebarCategoriesList';

const mapStateToProps = (state: any, props: any) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    toggleVisibility: (index: number) => {
      const payload = { index: index };

      dispatch(toggleCategoryVisibilityAction(payload));

      // dispatch(updateImageVisibilityBasedOnCategoryAction(index, value));
    },
    updateVisibility: (index: number, visible: boolean) => {
      const payload = { index: index, visible: visible };

      dispatch(updateCategoryVisibilityAction(payload));

      // dispatch(onlyShowImagesWithCertainCategoryAction(identifier));
    }
  };
};

const ConnectedCategories = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarCategoriesList);

export default ConnectedCategories;
