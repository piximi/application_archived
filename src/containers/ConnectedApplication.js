import { connect } from 'react-redux';

import {
  fitClassifierAction,
  openClassifierAction,
  saveClassifierAction
} from '../actions/classifier';
import Application from '../components/Application/Application';
import { createImageAction, addImages } from '../actions/images';
import { addCategories } from '../actions/categories';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fit: () => {
      const pathname = '';

      dispatch(fitClassifierAction(pathname));
    },
    open: event => {
      const pathname = '';

      dispatch(openClassifierAction(pathname));
    },
    save: event => {
      const pathname = '';

      dispatch(saveClassifierAction(pathname));
    },

    fileImport: exportedSettings => {
      dispatch(addCategories(exportedSettings.categories));
      dispatch(addImages(exportedSettings.images));
    },

    createImageAction: (images, imageByteStrings) => {
      dispatch(createImageAction(images, imageByteStrings));
    }
  };
};

const ConnectedApplication = connect(mapStateToProps, mapDispatchToProps)(
  Application
);

export default ConnectedApplication;
