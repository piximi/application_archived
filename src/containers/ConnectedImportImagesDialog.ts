import { connect } from 'react-redux';
import { createImageAction } from '../reducers/images';
import * as uuid from 'uuid';

import ImportImagesDialog from '../components/Dialog/ImportImagesDialog/ImportImagesDialog';

type CreateImagePayload = {
  categoryIdentifier: String;
  checksum: String;
  data: String;
  identifier: String;
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    createImage: (checksum: String, data: String) => {
      const payload: CreateImagePayload = {
        checksum: checksum,
        identifier: uuid.v4(),
        data: data,
        categoryIdentifier: ''
      };

      const action = createImageAction(payload);

      dispatch(action);
    }
  };
};

const mapStateToProps = (state: any, props: any) => {
  return {
    images: state.images
  };
};

const ConnectedImportImagesDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImportImagesDialog);

export default ConnectedImportImagesDialog;
