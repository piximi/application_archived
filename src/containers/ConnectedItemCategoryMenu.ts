import { connect } from 'react-redux';
import { GalleryItemCategoryMenu } from '../pages/images';
import { updateImageCategoryAction } from '../reducers/classifier';
import { Dispatch } from 'redux';
import { Classifier } from '../types';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.classifier.categories
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

const ConnectedItemCategoryMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryItemCategoryMenu);

export default ConnectedItemCategoryMenu;
