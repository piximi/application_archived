import { connect } from 'react-redux';
import { Gallery } from '../pages/images';

const mapStateToProps = (state: any) => {
  return {
    images: state.images
  };
};

const mapDispatchToProps = () => {
  return {};
};

const ConnectedGallery = connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);

export default ConnectedGallery;
