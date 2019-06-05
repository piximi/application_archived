import { connect } from 'react-redux';
import { SaveClassifierDialog } from '../pages/images';
import { Dispatch } from 'redux';
import { Classifier } from '@piximi/types';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    classifier: state.classifier
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

const ConnectedSaveClassifierDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveClassifierDialog);

export default ConnectedSaveClassifierDialog;
