import { connect } from 'react-redux';
import Gallery from '../components/Gallery/Gallery/Gallery';

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {};
};

const mapStateToProps = (state: any, props: any) => {
  return {
    images: state.images
  };
};

const ConnectedGallery = connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);

export default ConnectedGallery;
