import { connect } from 'react-redux';
import { createCategoryAction } from '../reducers/categories';
import { CreateCategoryDialog } from '../pages/images';
import uuidv4 from 'uuid';

let index = 0;

const mapStateToProps = (state: { categories: any }) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    createCategory: (color: any, description: any) => {
      const category = {
        color: color,
        description: description,
        identifier: uuidv4(),
        index: index++,
        visible: true
      };

      dispatch(createCategoryAction(category));
    }
  };
};

const ConnectedCreateCategoryDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCategoryDialog);

export default ConnectedCreateCategoryDialog;
