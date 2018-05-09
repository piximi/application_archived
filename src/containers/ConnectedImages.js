import { connect } from 'react-redux';
import uuidv4 from 'uuid';

import {
  createImageAction,
  updateImageCategoryAction
} from '../actions/images';
import Images from '../components/Images';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    createImage: () => {
      const image = {
        identifier: uuidv4(),
        pathname: ''
      };

      dispatch(createImageAction(image));
    },
    updateImageCategory: (identifier, category) => {
      dispatch(updateImageCategoryAction(identifier, category));
    }
  };
};

const ConnectedImages = connect(mapStateToProps, mapDispatchToProps)(Images);

export default ConnectedImages;
