import { connect } from 'react-redux';
import { Search } from '../pages/images';
import { updateImageVisibilityAction } from '@cytoai/store';
import { Dispatch } from 'redux';
import { Classifier, Image } from '../types';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    images: state.classifier.images
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateImageVisibility: (images: Image[]) => {
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
