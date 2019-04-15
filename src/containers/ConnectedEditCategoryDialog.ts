import { connect } from 'react-redux';
import {
  updateCategoryDescription,
  updateCategoryColor
} from '../reducers/categories';
import EditCategoryDialog from '../components/Dialog/EditCategoryDialog/EditCategoryDialog';

const mapStateToProps = (state: { categories: any; }) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    updateColor: (index: number, color: string) => {
      const payload = {index: index, color: color};

      dispatch(updateCategoryColor(payload));
    },
    updateDescription: (index: number, description: string) => {
      const payload = {index: index, description: description};

      dispatch(updateCategoryDescription(payload));
    }
  };
};

const ConnectedEditCategoryDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategoryDialog);

export default ConnectedEditCategoryDialog;
