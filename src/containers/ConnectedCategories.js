import { connect } from 'react-redux';
import uuidv4 from 'uuid';
import randomcolor from 'randomcolor';

import { createCategoryAction } from '../actions/categories';
import {
  closeCreateCategoryDialogAction,
  openCreateCategoryDialogAction
} from '../actions/settings';

import Categories from '../components/Categories';

let index = 0;

const mapStateToProps = (state, props) => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
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
    },
    openCreateCategoryDialog: () => {
      dispatch(openCreateCategoryDialogAction({}));
    }
  };
};

const ConnectedCategories = connect(mapStateToProps, mapDispatchToProps)(
  Categories
);

export default ConnectedCategories;
