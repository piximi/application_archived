import { connect } from 'react-redux';
import { Application } from '../pages/images';
import { Dispatch } from 'redux';
import { Classifier } from '../types';
import { updateImageCategoryAction } from '../reducers/classifier';

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
    updateImageCategory: (identifier: string, categoryIdentifier: string) => {
      const payload = {
        identifier: identifier,
        categoryIdentifier: categoryIdentifier
      };

      const action = updateImageCategoryAction(payload);

      dispatch(action);
    }
  };
};

const ConnectedApplication = connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);

export default ConnectedApplication;
