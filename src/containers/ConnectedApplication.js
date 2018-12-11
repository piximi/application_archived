import { connect } from 'react-redux';
import { fitClassifierAction } from '../actions/classifier';
import Application from '../components/Application/Application';
import {
  updateImageCategoryAction,
  // TODO update Image Probability rename
  updateImageProbability,
  updateUnlabeledVisibilityAction
} from '../actions/images';

const mapStateToProps = state => {
  return {
    ...state,
    imagesMetadata: state.images.images.filter(image => image.visible === true)
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fit: () => {
      const pathname = '';
      dispatch(fitClassifierAction(pathname));
    },
    updateImageCategory: (imgIdentifier, categoryIdentifier, categoryName) => {
      dispatch(
        updateImageCategoryAction(
          imgIdentifier,
          categoryIdentifier,
          categoryName
        )
      );
      dispatch(updateImageProbability(imgIdentifier, null));
    },

    updateUnlabeledVisibility: () => {
      dispatch(updateUnlabeledVisibilityAction());
    }
  };
};

const ConnectedApplication = connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);

export default ConnectedApplication;
