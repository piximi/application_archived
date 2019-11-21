import { connect } from 'react-redux';
import { GalleryItem } from './GalleryItem';
import { updateImageCategoryAction } from '@piximi/store';
import { Dispatch } from 'redux';
import { Classifier } from '@piximi/types';

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
        categoryIdentifier: categoryIdentifier,
        identifier: identifier
      };

      const action = updateImageCategoryAction(payload);

      dispatch(action);
    }
  };
};

export const ConnectedItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryItem);
