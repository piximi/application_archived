import { connect } from 'react-redux';
import uuidv4 from 'uuid';
import randomcolor from 'randomcolor';

import { createCategoryAction } from '../actions/categories';
import {
  closeCreateCategoryDialogAction,
  toggleCreateCategoryDialogAction
} from '../actions/settings';

import Categories from '../components/Categories';

let index = 0;

const mapStateToProps = (state, props) => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    toggleCreateCategoryDialog: () => {
      dispatch(toggleCreateCategoryDialogAction());
    },
    closeCreateCategoryDialog: (action, element) => {
      if (action === 'Create') {
        const categoryName = element.value;
        const category = {
          color: randomcolor(),
          description: categoryName,
          identifier: uuidv4(),
          index: index++,
          visible: true
        };
        dispatch(createCategoryAction(category));
      }
      dispatch(closeCreateCategoryDialogAction({}));
    }
  };
};

const ConnectedCategories = connect(mapStateToProps, mapDispatchToProps)(
  Categories
);

export default ConnectedCategories;
