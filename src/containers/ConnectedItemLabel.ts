import { connect } from 'react-redux';
import { GalleryItemLabel } from '../pages/images';

const mapStateToProps = (state: any) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = () => {};

const ConnectedItemLabel = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryItemLabel);

export default ConnectedItemLabel;
