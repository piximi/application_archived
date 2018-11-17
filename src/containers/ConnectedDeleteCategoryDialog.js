import { connect } from 'react-redux';
import { toggleDeleteCategoryDialogAction } from '../actions/settings';
import DeleteCategoryDialog from '../components/DeleteCategoryDialog/DeleteCategoryDialog';
import { deleteCategoryAction } from '../actions/categories';
import { updateImagesHavingCertainCategory } from '../actions/images';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteCategory: event => {
      const identifier = props.identifier;

      dispatch(deleteCategoryAction(identifier));

      dispatch(updateImagesHavingCertainCategory(identifier));

      dispatch(toggleDeleteCategoryDialogAction());
    },
    toggleDeleteCategoryDialog: () => {
      dispatch(toggleDeleteCategoryDialogAction());
    }
  };
};

const ConnectedDeleteCategoryDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCategoryDialog);

export default ConnectedDeleteCategoryDialog;
