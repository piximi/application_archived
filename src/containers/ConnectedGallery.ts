import { connect } from 'react-redux';
import { Gallery } from '../pages/images';

const mapStateToProps = (state: any) => {
  return {
    images: state.images
  };
};

const ConnectedGallery = connect(mapStateToProps)(Gallery);

export default ConnectedGallery;
