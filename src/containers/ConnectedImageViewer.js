import { connect } from 'react-redux';
import ImageViewer from '../components/ImageViewer/ImageViewer/ImageViewer';
import {
  updateBrightnessAction,
  updateBrightnessForAllImagesAction,
  updateContrastAction,
  updateContrastForAllImagesAction
} from '../actions/images';

const mapStateToProps = state => {
  return {
    images: state.images.images
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    updateBrightness: (imgIdentifier, brightness) => {
      dispatch(updateBrightnessAction(imgIdentifier, brightness));
    },
    updateBrightnessGlobally: brightness => {
      dispatch(updateBrightnessForAllImagesAction(brightness));
    },
    updateContrast: (imgIdentifier, contrast) => {
      dispatch(updateContrastAction(imgIdentifier, contrast));
    },
    updateContrastGlobally: contrast => {
      dispatch(updateContrastForAllImagesAction(contrast));
    },
    saveEdits: (imgIdentifier, brightness, contrast) => {
      dispatch(updateBrightnessAction(imgIdentifier, brightness));
      dispatch(updateContrastAction(imgIdentifier, contrast));
    },
    saveEditsGlobally: (brightness, contrast) => {
      dispatch(updateBrightnessForAllImagesAction(brightness));
      dispatch(updateContrastForAllImagesAction(contrast));
    }
  };
};

const ConnectedImageViewer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageViewer);

export default ConnectedImageViewer;
