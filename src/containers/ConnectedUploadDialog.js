import { connect } from 'react-redux';
import { toggleUploadDialogAction } from '../actions/settings';
import UploadDialog from '../components/UploadDialog/UploadDialog';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    toggleUploadDialog: () => {
      dispatch(toggleUploadDialogAction());
    }
  };
};

const ConnectedUploadDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadDialog);

export default ConnectedUploadDialog;
