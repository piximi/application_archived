import { connect } from 'react-redux';
import { ImageDialogContent } from './ImageDialogContent';
import {
  updateImageBrightnessAction,
  updateImageContrastAction
} from '@piximi/store';
import { Dispatch } from 'redux';
import { Classifier, Image } from '@piximi/types';

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
    saveEdits: (identifier: string, brightness: number, contrast: number) => {
      const brightnessPayload = {
        identifier: identifier,
        brightness: brightness
      };

      const brightnessAction = updateImageBrightnessAction(brightnessPayload);

      dispatch(brightnessAction);

      const contrastPayload = {
        identifier: identifier,
        contrast: contrast
      };

      const contrastAction = updateImageContrastAction(contrastPayload);

      dispatch(contrastAction);
    },
    saveEditsGlobally: (
      images: Image[],
      brightness: number,
      contrast: number
    ) => {
      for (let image of images) {
        const brightnessPayload = {
          identifier: image.identifier,
          brightness: brightness
        };

        const brightnessAction = updateImageBrightnessAction(brightnessPayload);

        dispatch(brightnessAction);

        const contrastPayload = {
          identifier: image.identifier,
          contrast: contrast
        };

        const contrastAction = updateImageContrastAction(contrastPayload);

        dispatch(contrastAction);
      }
    }
  };
};

export const ConnectedImageDialogContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageDialogContent);
