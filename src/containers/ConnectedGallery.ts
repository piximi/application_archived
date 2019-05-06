import { connect } from 'react-redux';
import { Gallery } from '../pages/images';

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {};
};

const mapStateToProps = (state: any) => {
  return {
    images: state.images
  };
};

const ConnectedGallery = connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);

export default ConnectedGallery;
