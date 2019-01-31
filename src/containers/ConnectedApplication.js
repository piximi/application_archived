import { connect } from 'react-redux';
import { fitClassifierAction } from '../actions/classifier';
import Application from '../components/Application/Application';
import {
  updateImageCategoryAction,
  updateImageProbabilityAction,
  updateUnlabeledVisibilityAction
} from '../actions/images';
import { getVisibleImages } from '../selectors/images';

const mapStateToProps = state => {
  return {
    ...state,
    images: getVisibleImages(state.images.images),
    spinnerActive: state.settings.spinnerActive
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
      dispatch(updateImageProbabilityAction(imgIdentifier, null));
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
