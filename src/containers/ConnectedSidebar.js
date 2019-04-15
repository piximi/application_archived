import { connect } from 'react-redux';
import axios from 'axios';
import Sidebar from '../components/SidebarDrawer/SidebarDrawer/SidebarDrawer';
import {
  addImagesAction,
  updateImageCategoryAction,
  updateImageProbabilityAction
} from '../actions/images';
import {
  addCategoryAction,
  createCategoryAction
} from '../reducers/categories';

import { toggleSpinnerAction } from '../actions/settings';

const loadDemoProject = demo => {
  return dispatch => {
    return axios
      .get(
        ' https://raw.githubusercontent.com/cytoai/cyto/master/src/demos/' +
          demo +
          '.cyto'
      )
      .then(result => {
        dispatch(toggleSpinnerAction());
        dispatch(addImagesAction(result.data.images));
        dispatch(addCategoryAction(result.data.categories));
      })
      .catch(function(error) {
        alert(error);
      });
  };
};

const mapStateToProps = state => {
  return {
    images: state.images,
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateStore: data => {
      dispatch(addImagesAction(data.images));
      dispatch(addCategoryAction(data.categories));
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
    },
    loadDemoProject: demo => {
      dispatch(addImagesAction({}));
      dispatch(toggleSpinnerAction());
      dispatch(loadDemoProject(demo));
    }
  };
};

const ConnectedSidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default ConnectedSidebar;
