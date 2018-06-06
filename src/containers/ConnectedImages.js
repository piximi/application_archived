import { connect } from 'react-redux';
import {
  createImageAction,
  updateImageCategoryAction,
  updateImageProbability
} from '../actions/images';
import Images from '../components/Images/Images';

const mapStateToProps = state => {
  return {
    images: state.images.images,
    categories: state.categories,
    imageByteStrings: state.images.imageByteStrings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createImageAction: (images, imageByteStrings) => {
      dispatch(createImageAction(images, imageByteStrings));
    },
    updateImageCategory: (identifier, category) => {
      dispatch(updateImageCategoryAction(identifier, category));
      dispatch(updateImageProbability(identifier, null));
    }
  };
};

const ConnectedImages = connect(mapStateToProps, mapDispatchToProps)(Images);

export default ConnectedImages;
