import { connect } from 'react-redux';
import { DeleteImageDialog } from '../pages/images';
import { deleteImagesAction } from '../actions/images';
import { Dispatch } from 'redux';

const mapStateToProps = (state: { images: any }) => {
  return {
    images: state.images
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
