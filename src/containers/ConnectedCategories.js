import { connect } from 'react-redux';
import uuidv4 from 'uuid';
import randomcolor from 'randomcolor';
import {
  createCategoryAction,
  deleteCategoryAction,
  updateCategoryDescriptionAction,
  updateCategoryVisibilityAction
} from '../actions/categories';
import {
  toggleDeleteCategoryDialogAction,
  closeCreateCategoryDialogAction,
  toggleCategoriesCollapseAction,
  toggleCreateCategoryDialogAction
} from '../actions/settings';

import {
  updateImageVisibility,
  updateImagesHavingCertainCategory
} from '../actions/images';

import Categories from '../components/Categories/Categories';

let index = 0;

const mapStateToProps = (state, props) => {
  return state;
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
    },

    toggleCreateCategoryDialog: () => {
      dispatch(toggleCreateCategoryDialogAction());
    },

    closeCreateCategoryDialog: (action, element) => {
      if (action === 'Create') {
        const categoryName = element.value;
        const category = {
          color: randomcolor(),
          description: categoryName,
          identifier: uuidv4(),
          index: index++,
          visible: true
        };
        dispatch(createCategoryAction(category));
      }
      dispatch(closeCreateCategoryDialogAction({}));
    },

    toggleCategoriesCollapse: () => dispatch(toggleCategoriesCollapseAction())
  };
};

const ConnectedCategories = connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);

export default ConnectedCategories;
