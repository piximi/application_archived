import { connect } from 'react-redux';
import uuidv4 from 'uuid';

import { createImageAction } from '../actions/images';
import Images from '../components/Images';

const mapStateToProps = (state, props) => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    createCategory: () => {
      const image = {
        identifier: uuidv4()
      };

      dispatch(createImageAction(image));
    }
  };
};

const ConnectedImages = connect(mapStateToProps, mapDispatchToProps)(Images);

export default ConnectedImages;
