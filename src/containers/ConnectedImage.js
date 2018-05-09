import { connect } from 'react-redux';

import { updateImageCategoryAction } from '../actions/images';
import Image from '../components/Image';

const mapStateToProps = state => {
  return state;
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
