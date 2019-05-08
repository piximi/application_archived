import { connect } from 'react-redux';
import { createImageAction } from '../reducers/classifier';
import * as uuid from 'uuid';
import { ImportImagesButton } from '../pages/images';
import { Dispatch } from 'redux';
import { Classifier } from '../types';

type CreateImagePayload = {
  categoryIdentifier: String;
  checksum: String;
  data: String;
  identifier: String;
};

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
    createImage: (checksum: String, data: String) => {
      const payload: CreateImagePayload = {
        checksum: checksum,
        identifier: uuid.v4(),
        data: data,
        categoryIdentifier: ''
      };

      const action = createImageAction([payload]);

      dispatch(action);
    }
  };
};

const ConnectedImportImagesButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImportImagesButton);

export default ConnectedImportImagesButton;
