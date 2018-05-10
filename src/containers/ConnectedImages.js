import { connect } from 'react-redux';
import uuidv4 from 'uuid';

import { createImageAction } from '../actions/images';
import Images from '../components/Images';
import getVisibleImages from '../selectors/images';

const mapStateToProps = state => {
  return {
    //images: getVisibleImages(state),
    images: state.images.images,
    imageByteStrings: state.images.imageByteStrings,
    settings: state.settings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createImageAction: (images, imageByteStrings) => {
      dispatch(createImageAction(images, imageByteStrings));
    }
  };
};

const ConnectedImages = connect(mapStateToProps, mapDispatchToProps)(Images);

export default ConnectedImages;
