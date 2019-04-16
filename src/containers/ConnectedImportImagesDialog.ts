import { connect } from 'react-redux';
import { toggleCategoryVisibility } from '../reducers/categories';

import ImportImagesDialog from '../components/Dialog/ImportImagesDialog/ImportImagesDialog';

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    toggleVisibility: (index: number) => {
      const payload = { index: index };

      dispatch(toggleCategoryVisibility(payload));
    }
  };
};

const mapStateToProps = (state: any, props: any) => {
  return {
    images: state.images
  };
};

const ConnectedImportImagesDialog = connect(
  mapDispatchToProps,
  mapStateToProps
)(ImportImagesDialog);

export default ConnectedImportImagesDialog;
