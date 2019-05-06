import { connect } from 'react-redux';
import { GalleryItemLabel } from '../pages/images';

const mapDispatchToProps = () => {
  return {};
};

const mapStateToProps = (state: any) => {
  return {
    categories: state.categories
  };
};

const ConnectedItemLabel = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryItemLabel);

export default ConnectedItemLabel;
