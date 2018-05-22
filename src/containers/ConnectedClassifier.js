import { connect } from 'react-redux';

import {
  fitClassifierAction,
  openClassifierAction,
  saveClassifierAction
} from '../actions/classifier';
import Classifier from '../components/Classifier';
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
      dispatch(addImages(exportedSettings.images));
      dispatch(addCategories(exportedSettings.categories));
    },

    createImageAction: (images, imageByteStrings) => {
      dispatch(createImageAction(images, imageByteStrings));
    }
  };
};

const ConnectedClassifier = connect(mapStateToProps, mapDispatchToProps)(
  Classifier
);

export default ConnectedClassifier;
