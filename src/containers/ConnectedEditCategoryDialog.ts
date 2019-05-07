import { connect } from 'react-redux';
import {
  updateCategoryColorAction,
  updateCategoryDescriptionAction
} from '../reducers/categories';
import { EditCategoryDialog } from '../pages/images';
import { Category } from '../types';
import { Dispatch } from 'redux';

const mapStateToProps = (state: { categories: Category[] }) => {
  return {
    categories: state.categories
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
