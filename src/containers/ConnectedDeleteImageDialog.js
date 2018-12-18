import { connect } from 'react-redux';
import DeleteImageDialog from '../components/DeleteImageDialog/DeleteImageDialog';
import { deleteImagesAction } from '../actions/images';

const mapStateToProps = state => {
  return {
    images: state.images.images
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteImages: imgIdentifiers => {
      dispatch(deleteImagesAction(imgIdentifiers));
    }
  };
};

const ConnectedDeleteImageDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteImageDialog);

export default ConnectedDeleteImageDialog;
