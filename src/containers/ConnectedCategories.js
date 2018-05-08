import { connect } from 'react-redux';

import { createCategory } from '../actions/category';
import Categories from '../components/Categories';

const mapStateToProps = (state, props) => {
  return {
    categories: state
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      console.log(props);
      dispatch(createCategory(props));
    }
  };
};

const ConnectedCategories = connect(mapStateToProps, mapDispatchToProps)(
  Categories
);

export default ConnectedCategories;
