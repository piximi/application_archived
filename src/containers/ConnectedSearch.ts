import { connect } from 'react-redux';
import { Search } from '../pages/images';
import { updateImageVisibilityAction } from '../actions/images';

const mapStateToProps = (state: { images: any }) => {
  return {
    images: state.images
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateImageVisibility: (images: any) => {
      dispatch(updateImageVisibilityAction(images));
    }
  };
};

const ConnectedSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default ConnectedSearch;
