import { connect } from 'react-redux';
import { DeleteCategoryDialog } from '../pages/images';
import { deleteCategoryAction } from '@piximi/store';
import { Classifier } from '@piximi/types';
import { Dispatch } from 'redux';

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
    deleteCategory: (identifier: string) => {
      const payload = {
        identifier: identifier
      };

      const action = deleteCategoryAction(payload);

      dispatch(action);
    }
  };
};

const ConnectedDeleteCategoryDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCategoryDialog);

export default ConnectedDeleteCategoryDialog;
