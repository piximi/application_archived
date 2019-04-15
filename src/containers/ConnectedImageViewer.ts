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

const mapStateToProps = (state: { images: any; }) => {
  return {
    images: state.images
  };
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    saveEdits: (imgIdentifier: any, brightness: any, contrast: any, unselectedChannels: any) => {
      dispatch(updateBrightnessAction(imgIdentifier, brightness));
      dispatch(updateContrastAction(imgIdentifier, contrast));
      dispatch(
        updateUnselectedChannelsAction(imgIdentifier, unselectedChannels)
      );
    },
    saveEditsGlobally: (brightness: any, contrast: any, unselectedChannels: any) => {
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
