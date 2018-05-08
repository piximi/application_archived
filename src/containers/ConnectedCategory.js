import { connect } from 'react-redux';

import { updateCategoryVisibility } from '../actions/category';
import Category from '../components/Category';

const mapStateToProps = (state, props) => {
  return props;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(updateCategoryVisibility(props));
    }
  };
};

const ConnectedCategory = connect(mapStateToProps, mapDispatchToProps)(
  Category
);

export default ConnectedCategory;
