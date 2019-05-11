import { connect } from 'react-redux';
import {
  toggleCategoryVisibilityAction,
  updateCategoryVisibilityAction
} from '@cytoai/store';
import { SidebarCategoriesList } from '../pages/images';
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
