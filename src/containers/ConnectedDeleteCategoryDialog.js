import { connect } from 'react-redux';
import DeleteCategoryDialog from '../components/DeleteCategoryDialog/DeleteCategoryDialog';
import { deleteCategoryAction } from '../actions/categories';
import { updateImagesHavingCertainCategoryAction } from '../actions/images';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteCategory: categoryIdentifier => {
      dispatch(deleteCategoryAction(categoryIdentifier));
      dispatch(updateImagesHavingCertainCategoryAction(categoryIdentifier));
    }
  };
};

const ConnectedDeleteCategoryDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCategoryDialog);

export default ConnectedDeleteCategoryDialog;
