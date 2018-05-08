import { connect } from 'react-redux';
import uuidv4 from 'uuid';

import { createCategoryAction } from '../actions/category';
import Categories from '../components/Categories';

const mapStateToProps = (state, props) => {
  return {
    categories: state
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    createCategory: () => {
      const category = {
        identifier: uuidv4()
      };

      dispatch(createCategoryAction(category));
    }
  };
};

const ConnectedCategories = connect(mapStateToProps, mapDispatchToProps)(
  Categories
);

export default ConnectedCategories;
