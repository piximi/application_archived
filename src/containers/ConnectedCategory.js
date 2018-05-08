import { connect } from 'react-redux';

import {
  updateCategoryDescriptionAction,
  updateCategoryVisibilityAction
} from '../actions/category';
import Category from '../components/Category';

const mapStateToProps = (state, props) => {
  console.log(props);
  return props;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    updateCategoryDescription: () => {
      dispatch(updateCategoryDescriptionAction(props));
    },
    updateCategoryVisibility: () => {
      dispatch(updateCategoryVisibilityAction(props));
    }
  };
};

const ConnectedCategory = connect(mapStateToProps, mapDispatchToProps)(
  Category
);

export default ConnectedCategory;
