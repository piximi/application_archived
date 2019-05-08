import { connect } from 'react-redux';
import { GalleryItem } from '../pages/images';
import { updateImageCategoryAction } from '../reducers/classifier';
import { Dispatch } from 'redux';
import { Classifier } from '../types';

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
    updateImageCategory: (identifier: string, categoryIdentifier: string) => {
      const payload = {
        identifier: identifier,
        categoryIdentifier: categoryIdentifier
      };

      const action = updateImageCategoryAction(payload);

      dispatch(action);
    }
  };
};

const ConnectedItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryItem);

export default ConnectedItem;
