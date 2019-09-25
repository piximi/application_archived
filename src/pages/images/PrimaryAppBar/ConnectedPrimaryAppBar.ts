import { connect } from 'react-redux';
import { updateImageVisibilityAction } from '@piximi/store';
import { Dispatch } from 'redux';
import { Classifier } from '@piximi/types';
import { PrimaryAppBar } from './PrimaryAppBar';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    images: state.classifier.images,
    categories: state.classifier.categories
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeImagesVisibility: (identifiers: string[], visibility: boolean) => {
      const payload = {
        identifiers: identifiers,
        visible: visibility
      };

      const action = updateImageVisibilityAction(payload);

      dispatch(action);
    }
  };
};

export const ConnectedPrimaryAppBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(PrimaryAppBar);
