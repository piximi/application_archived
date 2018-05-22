import { connect } from 'react-redux';

import { updateImageCategoryAction } from '../actions/images';
import Image from '../components/Image';

const mapStateToProps = (state, props) => {
  return state.images.images.find(
    image => props.identifier === image.identifier
  );
};

const mapDispatchToProps = dispatch => {
  return {
    updateImageCategory: (identifier, category) => {
      dispatch(updateImageCategoryAction(identifier, category));
    }
  };
};

const ConnectedImage = connect(mapStateToProps, mapDispatchToProps)(Image);

export default ConnectedImage;
