import { connect } from 'react-redux';
import { fitClassifierAction } from '../actions/classifier';
import Application from '../components/Application/Application';
import {
  updateImageCategoryAction,
  updateImageProbabilityAction
} from '../actions/images';
import { getVisibleImages } from '../selectors/images';

const mapStateToProps = state => {
  return {
    categories: state.categories,
    images: getVisibleImages(state),
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
    }
  };
};

const ConnectedApplication = connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);

export default ConnectedApplication;
