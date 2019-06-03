import { connect } from 'react-redux';
import {
  updateCategoryColorAction,
  updateCategoryDescriptionAction
} from '@piximi/store';
import { EditCategoryDialog } from '../pages/images';
import { Classifier } from '@piximi/types';
import { Dispatch } from 'redux';

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
    updateColor: (identifier: string, color: string) => {
      const payload = { identifier: identifier, color: color };

      const action = updateCategoryColorAction(payload);

      dispatch(action);
    },
    updateDescription: (identifier: string, description: string) => {
      const payload = { identifier: identifier, description: description };

      const action = updateCategoryDescriptionAction(payload);

      dispatch(action);
    }
  };
};

const ConnectedEditCategoryDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategoryDialog);

export default ConnectedEditCategoryDialog;
