import { connect } from 'react-redux';
import Search from '../components/AppBar/Search';
import { updateImageVisibilityAction } from '../actions/images';

const mapStateToProps = state => {
  return {
    images: state.images.images
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    updateImageVisibility: (identifier, value) => {
      dispatch(updateImageVisibilityAction(identifier, value));
    }
  };
};

const ConnectedSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default ConnectedSearch;
