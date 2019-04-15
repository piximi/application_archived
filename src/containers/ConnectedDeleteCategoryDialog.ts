import { connect } from 'react-redux';
import DeleteCategoryDialog from '../components/Dialog/DeleteCategoryDialog/DeleteCategoryDialog';
import { deleteCategoryAction } from '../reducers/categories';
import { setImageCategoryToNullBasedOnCategoryAction } from '../actions/images';

const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    deleteCategory: (categoryIdentifier: any) => {
      dispatch(deleteCategoryAction(categoryIdentifier));
      dispatch(setImageCategoryToNullBasedOnCategoryAction(categoryIdentifier));
    }
  };
};

const ConnectedDeleteCategoryDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCategoryDialog);

export default ConnectedDeleteCategoryDialog;
