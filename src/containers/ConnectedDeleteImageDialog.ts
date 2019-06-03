import { connect } from 'react-redux';
import { DeleteImageDialog } from '../pages/images';
import { deleteImageAction } from '@piximi/store';
import { Dispatch } from 'redux';
import { Classifier } from '@piximi/types';

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
    deleteImages: (identifiers: string[]) => {
      for (let identifier of identifiers) {
        const payload = {
          identifier: identifier
        };

        const action = deleteImageAction(payload);

        dispatch(action);
      }
    }
  };
};

const ConnectedDeleteImageDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteImageDialog);

export default ConnectedDeleteImageDialog;
