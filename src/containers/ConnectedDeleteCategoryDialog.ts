import { connect } from 'react-redux';
import DeleteCategoryDialog from '../components/Dialog/DeleteCategoryDialog/DeleteCategoryDialog';
import { deleteCategory } from '../reducers/categories';
// import { setImageCategoryToNullBasedOnCategoryAction } from '../actions/images';

const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    delete: (index: number) => {
      const payload = {index: index};

      dispatch(deleteCategory(payload));

      // dispatch(setImageCategoryToNullBasedOnCategoryAction(categoryIdentifier));
    }
  };
};

const ConnectedDeleteCategoryDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCategoryDialog);

export default ConnectedDeleteCategoryDialog;
