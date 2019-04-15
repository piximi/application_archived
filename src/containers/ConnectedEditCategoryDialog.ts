import { connect } from 'react-redux';
import {
  updateCategoryDescriptionAction,
  updateCategoryColorAction
} from '../reducers/categories';
import EditCategoryDialog from '../components/Dialog/EditCategoryDialog/EditCategoryDialog';

const mapStateToProps = (state: { categories: any; }) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    updateCategory: (identifier: any, description: any, color: any) => {
      dispatch(updateCategoryDescriptionAction({identifier, description}));
      dispatch(updateCategoryColorAction({identifier, color}));
    }
  };
};

const ConnectedEditCategoryDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategoryDialog);

export default ConnectedEditCategoryDialog;
