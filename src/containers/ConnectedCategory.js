import { connect } from 'react-redux';
import _ from 'lodash';

import {
  updateCategoryDescriptionAction,
  updateCategoryVisibilityAction
} from '../actions/categories';
import Category from '../components/Category';

const mapStateToProps = (state, props) => {
  const index = _.findIndex(state.categories, function(category) {
    return category.identifier === props.identifier;
  });

  return state.categories[index];
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    updateCategoryDescription: () => {
      dispatch(updateCategoryDescriptionAction(props));
    },
    updateCategoryVisibility: () => {
      const identifier = props.identifier;

      dispatch(updateCategoryVisibilityAction(identifier));
    }
  };
};

const ConnectedCategory = connect(mapStateToProps, mapDispatchToProps)(
  Category
);

export default ConnectedCategory;
