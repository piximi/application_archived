import { connect } from 'react-redux';
import uuidv4 from 'uuid';

import { createCategoryAction } from '../actions/categories';
import { openCreateCategoryDialogAction } from '../actions/settings';
import Categories from '../components/Categories';

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
    openCreateCategoryDialog: () => {
      dispatch(openCreateCategoryDialogAction({}));
    }
  };
};

const ConnectedCategories = connect(mapStateToProps, mapDispatchToProps)(
  Categories
);

export default ConnectedCategories;
