import { connect } from 'react-redux';
import uuidv4 from 'uuid';

import { createCategoryAction } from '../actions/category';
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
    }
  };
};

const ConnectedCategories = connect(mapStateToProps, mapDispatchToProps)(
  Categories
);

export default ConnectedCategories;
