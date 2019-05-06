import { connect } from 'react-redux';
import { Gallery } from '../pages/images';
import { Image } from '../types';

const mapStateToProps = (state: { images: Image[] }) => {
  return {
    images: state.images
  };
};

const ConnectedGallery = connect(mapStateToProps)(Gallery);

export default ConnectedGallery;
