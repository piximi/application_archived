import { connect } from 'react-redux';
import {
  updateCategoryVisibilityAction,
  toggleCategoryVisibilityAction
} from '../reducers/categories';
import { SidebarCategoryListItem } from '../pages/images';
import { Category } from '../types';
import { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleVisibility: (identifier: string) => {
      const payload = { identifier: identifier };

      const action = toggleCategoryVisibilityAction(payload);

      dispatch(action);
    },
    updateVisibility: (identifier: string, visible: boolean) => {
      const payload = { identifier: identifier, visible: visible };

      const action = updateCategoryVisibilityAction(payload);

      dispatch(action);
    }
  };
};

const mapStateToProps = (state: { categories: Category[] }, props: any) => {
  return {
    categories: state.categories
  };
};

const ConnectedSidebarCategoryListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarCategoryListItem);

export default ConnectedSidebarCategoryListItem;
