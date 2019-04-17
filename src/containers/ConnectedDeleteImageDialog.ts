import { connect } from 'react-redux';
import DeleteImageDialog from '../components/Dialog/DeleteImageDialog/DeleteImageDialog';
import { deleteImagesAction } from '../actions/images';

const mapStateToProps = (state: { images: any; }) => {
  return {
    images: state.images
  };
};

const mapDispatchToProps = (dispatch: any, props: any) => {
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
