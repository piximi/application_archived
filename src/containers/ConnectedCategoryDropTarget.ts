import { connect } from 'react-redux';
import { updateImageCategoryAction } from '@cytoai/store';
import { CategoryDropTarget } from '../components';
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
    updateImageCategory: (identifier: string, categoryIdentifier: string) => {
      const payload = {
        categoryIdentifier: categoryIdentifier,
        identifier: identifier
      };

      const action = updateImageCategoryAction(payload);

      dispatch(action);
    }
  };
};

const ConnectedCategoryDropTarget = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryDropTarget);

export default ConnectedCategoryDropTarget;
