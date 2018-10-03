import { connect } from 'react-redux';

import { toggleUploadDialogAction } from '../actions/settings';
import UploadDialog from '../components/UploadDialog/UploadDialog';
import { createImageAction } from '../actions/images';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    toggleUploadDialog: () => {
      dispatch(toggleUploadDialogAction());
    },
    createImageAction: image => {
      dispatch(createImageAction(image));
    }
  };
};

const ConnectedUploadDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadDialog);

export default ConnectedUploadDialog;
