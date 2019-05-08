import { connect } from 'react-redux';
import { DeleteImageDialog } from '../pages/images';
import { deleteImagesAction } from '../actions/images';
import { Dispatch } from 'redux';
import { Classifier } from '../types';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    images: state.classifier.images
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    deleteImages: (imgIdentifiers: any) => {
      dispatch(deleteImagesAction(imgIdentifiers));
    }
  };
};

const ConnectedDeleteImageDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteImageDialog);

export default ConnectedDeleteImageDialog;
