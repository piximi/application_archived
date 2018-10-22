import { connect } from 'react-redux';
import {
  updateImageCategoryAction,
  updateImageProbability
} from '../actions/images';
import Image from '../components/Gallery/Image';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    updateImageCategory: (identifier, category) => {
      dispatch(updateImageCategoryAction(identifier, category));
      dispatch(updateImageProbability(identifier, null));
    }
  };
};

const ConnectedImage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Image);

export default ConnectedImage;
