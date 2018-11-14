import { connect } from 'react-redux';
import {
  toggleUploadDialogAction,
  toggleNewImagesEventAction
} from '../actions/settings';
import UploadDialog from '../components/UploadDialog/UploadDialog';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    toggleUploadDialog: () => {
      dispatch(toggleUploadDialogAction());
    },
    toggleNewImagesEvent: () => {
      dispatch(toggleNewImagesEventAction());
    }
  };
};

const ConnectedUploadDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadDialog);

export default ConnectedUploadDialog;
