import { connect } from 'react-redux';
import { GalleryItemLabel } from '../pages/images';
import { Category } from '../types';

const mapStateToProps = (state: { categories: Category[] }) => {
  return {
    categories: state.categories
  };
};

const ConnectedItemLabel = connect(mapStateToProps)(GalleryItemLabel);

export default ConnectedItemLabel;
