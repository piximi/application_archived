import { connect } from 'react-redux';
import {
  updateCategoryVisibilityAction,
  toggleCategoryVisibilityAction
} from '../reducers/categories';

import SidebarCategoryListItem from '../components/SidebarDrawer/SidebarCategoryListItem/SidebarCategoryListItem';

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    toggleVisibility: (index: number) => {
      const payload = { index: index };

      dispatch(toggleCategoryVisibilityAction(payload));
    },
    updateVisibility: (index: number, visible: boolean) => {
      const payload = { index: index, visible: visible };

      dispatch(updateCategoryVisibilityAction(payload));
    }
  };
};

const mapStateToProps = (state: any, props: any) => {
  return {
    categories: state.categories
  };
};

const ConnectedSidebarCategoryListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarCategoryListItem);

export default ConnectedSidebarCategoryListItem;
