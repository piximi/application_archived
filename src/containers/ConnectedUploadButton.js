import { connect } from 'react-redux';
import UploadButton from '../components/UploadButton';

import { createImageAction } from '../actions/images';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    createImageAction: (images, imageByteStrings) => {
      dispatch(createImageAction(images, imageByteStrings));
    }
  };
};

const ConnectedUploadButton = connect(mapStateToProps, mapDispatchToProps)(
  UploadButton
);

export default ConnectedUploadButton;
