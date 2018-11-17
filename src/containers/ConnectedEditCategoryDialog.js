import { connect } from 'react-redux';
import {
  updateCategoryDescriptionAction,
  updateCategoryColorAction
} from '../actions/categories';
import EditCategoryDialog from '../components/EditCategoryDialog/EditCategoryDialog';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    updateCategory: (identifier, description, color) => {
      dispatch(updateCategoryDescriptionAction(identifier, description));
      dispatch(updateCategoryColorAction(identifier, color));
    }
  };
};

const ConnectedEditCategoryDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategoryDialog);

export default ConnectedEditCategoryDialog;
