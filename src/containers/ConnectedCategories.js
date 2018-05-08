import { connect } from 'react-redux';

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
      console.log(props);
      dispatch(createCategoryAction(props));
    }
  };
};

const ConnectedCategories = connect(mapStateToProps, mapDispatchToProps)(
  Categories
);

export default ConnectedCategories;
