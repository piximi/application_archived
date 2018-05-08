import { connect } from 'react-redux';

import { createCategory } from '../actions/category';
import Categories from '../components/Categories';

const mapStateToProps = (state, props) => {
  return props;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(createCategory(props));
    }
  };
};

const ConnectedCategories = connect(mapStateToProps, mapDispatchToProps)(
  Categories
);
