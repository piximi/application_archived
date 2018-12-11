import { connect } from 'react-redux';
import DeleteCategoryDialog from '../components/DeleteCategoryDialog/DeleteCategoryDialog';
import { deleteCategoryAction } from '../actions/categories';
import { updateImagesHavingCertainCategory } from '../actions/images';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteCategory: categoryIdentifier => {
      dispatch(deleteCategoryAction(categoryIdentifier));
      dispatch(updateImagesHavingCertainCategory(categoryIdentifier));
    }
  };
};

const ConnectedDeleteCategoryDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCategoryDialog);

export default ConnectedDeleteCategoryDialog;
