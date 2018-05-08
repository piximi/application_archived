import { connect } from 'react-redux';

import { updateCategoryVisibilityAction } from '../actions/category';
import Category from '../components/Category';

const mapStateToProps = (state, props) => {
  return props;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(updateCategoryVisibilityAction(props));
    }
  };
};

const ConnectedCategory = connect(mapStateToProps, mapDispatchToProps)(
  Category
);

export default ConnectedCategory;
