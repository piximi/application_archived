import { connect } from 'react-redux';
import {
  toggleCategoryVisibilityAction,
  updateCategoryVisibilityAction,
  updateImageCategoryAction
} from '@piximi/store';
import { SidebarCategoryListItem } from '../pages/images';
import { Classifier } from '../types';
import { Dispatch } from 'redux';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.classifier.categories
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleVisibility: (identifier: string) => {
      const payload = { identifier: identifier };

      const action = toggleCategoryVisibilityAction(payload);

      dispatch(action);
    },
    updateImageCategory: (identifier: string, categoryIdentifier: string) => {
      const payload = {
        categoryIdentifier: categoryIdentifier,
        identifier: identifier
      };

      const action = updateImageCategoryAction(payload);

      dispatch(action);
    },
    updateVisibility: (identifier: string, visible: boolean) => {
      const payload = { identifier: identifier, visible: visible };

      const action = updateCategoryVisibilityAction(payload);

      dispatch(action);
    }
  };
};

const ConnectedSidebarCategoryListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarCategoryListItem);

export default ConnectedSidebarCategoryListItem;
