import { connect } from 'react-redux';
import { createImageAction } from '@piximi/store';
import * as uuid from 'uuid';
import { ImportImagesButton } from '../pages/images';
import { Dispatch } from 'redux';
import { Classifier, Image, Partition } from '@piximi/types';

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
    createImage: (checksum: string, data: string) => {
      const image: Image = {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: checksum,
        data: data,
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

      const payload = {
        image: image
      };

      const action = createImageAction(payload);

      dispatch(action);
    }
  };
};

const ConnectedImportImagesButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImportImagesButton);

export default ConnectedImportImagesButton;
