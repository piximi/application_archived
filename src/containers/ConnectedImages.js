import { connect } from 'react-redux';

import {
  createImageAction,
  updateImageCategoryAction
} from '../actions/images';
import Images from '../components/Images';
import getVisibleImages from '../selectors/images';

const mapStateToProps = state => {
  return {
    categories: state.categories,
    images: state.images.images,
    imageByteStrings: state.images.imageByteStrings,
    settings: state.settings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createImageAction: (images, imageByteStrings) => {
      dispatch(createImageAction(images, imageByteStrings));
    },
    updateImageCategory: (identifier, category) => {
      dispatch(updateImageCategoryAction(identifier, category));
    }
  };
};

const ConnectedImages = connect(mapStateToProps, mapDispatchToProps)(Images);

export default ConnectedImages;
