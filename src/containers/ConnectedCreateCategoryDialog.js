import { connect } from 'react-redux';

import { createCategoryAction } from '../actions/categories';
import { closeCreateCategoryDialogAction } from '../actions/settings';

import CreateCategoryDialog from '../components/CreateCategoryDialog';
import uuidv4 from 'uuid';

let index = 0;

const mapStateToProps = (state, props) => {
  return state.categories;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    createCategory: () => {
      const category = {
        color: 'red',
        description: '',
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
