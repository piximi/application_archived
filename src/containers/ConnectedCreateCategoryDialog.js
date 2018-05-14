import { connect } from 'react-redux';

import { createCategoryAction } from '../actions/categories';
import {
  closeCreateCategoryDialogAction,
  toggleCreateCategoryColorMenuAction
} from '../actions/settings';

import CreateCategoryDialog from '../components/CreateCategoryDialog';
import uuidv4 from 'uuid';

let index = 0;

const mapStateToProps = (state, props) => {
  return state;
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
    },
    toggleCreateCategoryColorMenu: () => {
      dispatch(toggleCreateCategoryColorMenuAction());
    }
  };
};

const ConnectedCreateCategoryDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCategoryDialog);

export default ConnectedCreateCategoryDialog;
