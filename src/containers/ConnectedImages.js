import { connect } from 'react-redux';
import uuidv4 from 'uuid';

import { createImageAction } from '../actions/images';
import Images from '../components/Images';
import getVisibleImages from '../selectors/images';

const mapStateToProps = state => {
  return {
    categories: state.categories,
    images: getVisibleImages(state),
    settings: state.settings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createImage: () => {
      const image = {
        identifier: uuidv4(),
        pathname: ''
      };

      dispatch(createImageAction(image));
    }
  };
};

const ConnectedImages = connect(mapStateToProps, mapDispatchToProps)(Images);

export default ConnectedImages;
