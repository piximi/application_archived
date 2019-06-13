import { connect } from 'react-redux';
import { updateImageVisibilityAction } from '@piximi/store';
import { HideOtherCategoriesMenuItem } from '../pages/images';
import { Classifier } from '@piximi/types';
import { Dispatch } from 'redux';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    classifier: state.classifier
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    makeImageInvisible: (imageIdentifier: string) => {
      const payload = { identifier: imageIdentifier, visible: false };
      const action = updateImageVisibilityAction(payload);

      dispatch(action);
    }
  };
};

const ConnectedHideOtherCategoriesMenuItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(HideOtherCategoriesMenuItem);

export default ConnectedHideOtherCategoriesMenuItem;
