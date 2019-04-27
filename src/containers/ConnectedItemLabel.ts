import { connect } from 'react-redux';
import GalleryItemLabel from '../pages/images/GalleryItemLabel/GalleryItemLabel';

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {};
};

const mapStateToProps = (state: any, props: any) => {
  return {
    categories: state.categories
  };
};

const ConnectedItemLabel = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryItemLabel);

export default ConnectedItemLabel;
