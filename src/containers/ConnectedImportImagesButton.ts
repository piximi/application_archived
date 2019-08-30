import { connect } from 'react-redux';
import { createImagesAction } from '@piximi/store';
import * as uuid from 'uuid';
import { ImportImagesButton } from '../pages/images';
import { Dispatch } from 'redux';
import { Classifier, Image, Partition } from '@piximi/types';

type State = {
  classifier: Classifier;
};

type imageProps = {
  checksum: string;
  data: string;
};

const mapStateToProps = (state: State) => {
  return {
    images: state.classifier.images
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createImages: (imagePropsArray: imageProps[]) => {
      const images: Image[] = imagePropsArray.map((imageProps: imageProps) => {
        const image: Image = {
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: imageProps.checksum,
          data: imageProps.data,
          identifier: uuid.v4(),
          partition: Partition.Training,
          scores: [],
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true,
            visibleChannels: []
          }
        };
        return image;
      });

      const payload = {
        images: images
      };

      const action = createImagesAction(payload);

      dispatch(action);
    }
  };
};

const ConnectedImportImagesButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImportImagesButton);

export default ConnectedImportImagesButton;
