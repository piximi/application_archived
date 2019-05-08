import { connect } from 'react-redux';
import { ImageViewer } from '../pages/image';
import {
  updateBrightnessForAllImagesAction,
  updateContrastForAllImagesAction,
  updateUnselectedChannelsAction,
  updateUnselectedChannelsForAllImagesAction
} from '../actions/images';
import {
  updateImageBrightnessAction,
  updateImageContrastAction
} from '../reducers/classifier';
import { Dispatch } from 'redux';
import { Classifier } from '../types';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    images: state.classifier.images
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    saveEdits: (
      imgIdentifier: any,
      brightness: any,
      contrast: any,
      unselectedChannels: any
    ) => {
      dispatch(updateImageBrightnessAction({ imgIdentifier, brightness }));
      dispatch(updateImageContrastAction({ imgIdentifier, contrast }));
      dispatch(
        updateUnselectedChannelsAction(imgIdentifier, unselectedChannels)
      );
    },
    saveEditsGlobally: (
      brightness: any,
      contrast: any,
      unselectedChannels: any
    ) => {
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
