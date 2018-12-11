import { connect } from 'react-redux';
import { toggleModelCollapseAction } from '../actions/settings';
import Sidebar from '../components/Sidebar/Sidebar';
import {
  addImagesAction,
  updateImageCategoryAction,
  updateImageProbabilityAction
} from '../actions/images';
import {
  addCategoriesAction,
  createCategoryAction
} from '../actions/categories';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModelCollapse: () => dispatch(toggleModelCollapseAction()),
    updateStore: data => {
      dispatch(addImagesAction(data.images));
      dispatch(addCategoriesAction(data.categories));
    },
    updateImageCategory: (imgIdentifier, categoryIdentifier, categoryName) => {
      dispatch(
        updateImageCategoryAction(
          imgIdentifier,
          categoryIdentifier,
          categoryName
        )
      );
      dispatch(updateImageProbabilityAction(imgIdentifier, null));
    },
    createCategory: (identfier, color, description) => {
      const category = {
        color: color,
        description: description,
        identifier: identfier,
        index: null,
        visible: true
      };
      dispatch(createCategoryAction(category));
    }
  };
};

const ConnectedSidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default ConnectedSidebar;
