import { connect } from 'react-redux';
import { Search } from '../pages/images';
import { updateImageVisibilityAction } from '../actions/images';
import { Dispatch } from 'redux';
import { Image } from '../types';

const mapStateToProps = (state: { images: Image[] }) => {
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
