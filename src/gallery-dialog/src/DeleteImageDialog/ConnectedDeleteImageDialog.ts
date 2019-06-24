import { connect } from 'react-redux';
import { deleteImageAction } from '@piximi/store';
import { Dispatch } from 'redux';
import { Classifier } from '@piximi/types';
import { DeleteImageDialog } from './DeleteImageDialog';

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

export const ConnectedDeleteImageDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteImageDialog);
