import { connect } from 'react-redux';
import {
  updateCategoryVisibilityAction,
  toggleCategoryVisibilityAction
} from '../reducers/categories';
import { SidebarCategoriesList } from '../pages/images';
import { Category } from '../types';
import { Dispatch } from 'redux';

const mapStateToProps = (state: { categories: Category[] }) => {
  return {
    categories: state.categories
  };
};

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

const ConnectedCategories = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarCategoriesList);

export default ConnectedCategories;
