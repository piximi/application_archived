import { connect } from 'react-redux';
import { createImageAction } from '../reducers/images';

import ImportImagesDialog from '../components/Dialog/ImportImagesDialog/ImportImagesDialog';

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    createImage: (checksum: string, data: string) => {
      const payload = { checksum: checksum, data: data };

      dispatch(createImageAction(payload));
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
