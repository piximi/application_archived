import { connect } from 'react-redux';
import { Search } from '../pages/images';
import { updateImageVisibilityAction } from '../actions/images';
import { Dispatch } from 'redux';

const mapStateToProps = (state: { images: any }) => {
  return {
    images: state.images
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateImageVisibility: (images: any) => {
      const action = updateImageVisibilityAction(images);

      dispatch(action);
    }
  };
};

const ConnectedSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default ConnectedSearch;
