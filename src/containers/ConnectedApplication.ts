import { connect } from 'react-redux';
import { Application } from '../pages/images';
import {
  updateImageCategoryAction,
  updateImageProbabilityAction
} from '../actions/images';
import { Dispatch } from 'redux';
import { Classifier } from '../types';

type State = {
  classifier: Classifier;
  settings: any;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.classifier.categories,
    images: state.classifier.images,
    spinnerActive: state.settings.spinnerActive
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fit: () => {
      const pathname = '';
    },
    updateImageCategory: (
      imgIdentifier: any,
      categoryIdentifier: any,
      categoryName: any
    ) => {
      dispatch(
        updateImageCategoryAction(
          imgIdentifier,
          categoryIdentifier,
          categoryName
        )
      );
      dispatch(updateImageProbabilityAction(imgIdentifier, null));
    }
  };
};

const ConnectedApplication = connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);

export default ConnectedApplication;
