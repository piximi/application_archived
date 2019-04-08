import { connect } from 'react-redux';
import ImageViewer from '../components/Dialog/ImageViewerDialog/ImageViewer/ImageViewer';
import {
  updateBrightnessAction,
  updateBrightnessForAllImagesAction,
  updateContrastAction,
  updateContrastForAllImagesAction,
  updateUnselectedChannelsAction,
  updateUnselectedChannelsForAllImagesAction
} from '../actions/images';

const mapStateToProps = state => {
  return {
    images: state.images
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    saveEdits: (imgIdentifier, brightness, contrast, unselectedChannels) => {
      dispatch(updateBrightnessAction(imgIdentifier, brightness));
      dispatch(updateContrastAction(imgIdentifier, contrast));
      dispatch(
        updateUnselectedChannelsAction(imgIdentifier, unselectedChannels)
      );
    },
    saveEditsGlobally: (brightness, contrast, unselectedChannels) => {
      dispatch(updateBrightnessForAllImagesAction(brightness));
      dispatch(updateContrastForAllImagesAction(contrast));
      dispatch(updateUnselectedChannelsForAllImagesAction(unselectedChannels));
    }
  };
};

const ConnectedImageViewer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageViewer);

export default ConnectedImageViewer;
