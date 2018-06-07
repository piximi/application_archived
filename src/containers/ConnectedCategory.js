import { connect } from 'react-redux';

import {
  deleteCategoryAction,
  updateCategoryDescriptionAction,
  updateCategoryVisibilityAction
} from '../actions/categories';
import { toggleDeleteCategoryDialogAction } from '../actions/settings';

import { updateImageVisibility } from '../actions/images';

import Category from '../components/Category/Category';

import { updateImagesHavingCertainCategory } from '../actions/images';

const mapStateToProps = (state, props) => {
  const category = state.categories.find(
    category => props.identifier === category.identifier
  );

  return {
    ...category,
    categories: state.categories,
    images: state.images.images,
    settings: state.settings
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteCategory: event => {
      const identifier = props.identifier;
      dispatch(deleteCategoryAction(identifier));
      dispatch(updateImagesHavingCertainCategory(identifier));
    },
    toggleDeleteCategoryDialog: () => {
      dispatch(toggleDeleteCategoryDialogAction());
    },
    updateCategoryDescription: event => {
      const identifier = props.identifier;
      const description = event.target.value;
      dispatch(updateCategoryDescriptionAction(identifier, description));
    },
    updateCategoryVisibility: (images, value) => {
      const identifier = props.identifier;
      dispatch(updateCategoryVisibilityAction(identifier));
      for (let index in images) {
        if (images[index].category === props.identifier) {
          dispatch(updateImageVisibility(index, value));
        }
      }
    }
  };
};

const ConnectedCategory = connect(mapStateToProps, mapDispatchToProps)(
  Category
);

export default ConnectedCategory;
