import { connect } from 'react-redux';
import { DeleteCategoryDialog } from '../pages/images';
import { deleteCategoryAction } from '../reducers/categories';
import { Category } from '../types';

const mapStateToProps = (state: Category[]) => {
  return state;
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    deleteCategory: (identifier: string) => {
      const payload = { identifier: identifier };

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
