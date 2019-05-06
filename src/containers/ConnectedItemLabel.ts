import { connect } from 'react-redux';
import { GalleryItemLabel } from '../pages/images';

const mapStateToProps = (state: any) => {
  return {
    categories: state.categories
  };
};

const ConnectedItemLabel = connect(mapStateToProps)(GalleryItemLabel);

export default ConnectedItemLabel;
