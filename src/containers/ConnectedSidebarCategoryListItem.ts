import { connect } from 'react-redux';
import {
  updateCategoryVisibility,
  toggleCategoryVisibility
} from '../reducers/categories';

import SidebarCategoryListItem from '../components/SidebarDrawer/SidebarCategoryListItem/SidebarCategoryListItem';

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    toggleVisibility: (index: number) => {
      const payload = { index: index };

      dispatch(toggleCategoryVisibility(payload));
    },
    updateVisibility: (index: number, visible: boolean) => {
      const payload = { index: index, visible: visible };

      dispatch(updateCategoryVisibility(payload));
    }
  };
};

const mapStateToProps = (state: any, props: any) => {
  return {
    categories: state.categories
  };
};

const ConnectedSidebarCategoryListItem = connect(
  mapDispatchToProps,
  mapStateToProps
)(SidebarCategoryListItem);

export default ConnectedSidebarCategoryListItem;
