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

const loadDemoProject = (demo: string) => {
  return (dispatch: any) => {
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

const mapStateToProps = (state: { images: any; categories: any; }) => {
  return {
    images: state.images,
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateStore: (data: { images: any; categories: any; }) => {
      dispatch(addImagesAction(data.images));
      dispatch(addCategoryAction(data.categories));
    },
    updateImageCategory: (imgIdentifier: any, categoryIdentifier: any, categoryName: any) => {
      dispatch(
        updateImageCategoryAction(
          imgIdentifier,
          categoryIdentifier,
          categoryName
        )
      );
      dispatch(updateImageProbabilityAction(imgIdentifier, null));
    },
    createCategory: (identfier: any, color: any, description: any) => {
      const category = {
        color: color,
        description: description,
        identifier: identfier,
        index: null,
        visible: true
      };
      dispatch(createCategoryAction(category));
    },
    loadDemoProject: (demo: string) => {
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
