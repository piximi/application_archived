import { connect } from 'react-redux';

import {
  fitClassifierAction,
  openClassifierAction,
  saveClassifierAction
} from '../actions/classifier';
import Classifier from '../components/Classifier';
import { createImageAction } from '../actions/images';

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

    createImageAction: (images, imageByteStrings) => {
      dispatch(createImageAction(images, imageByteStrings));
    }
  };
};

const ConnectedClassifier = connect(mapStateToProps, mapDispatchToProps)(
  Classifier
);

export default ConnectedClassifier;
