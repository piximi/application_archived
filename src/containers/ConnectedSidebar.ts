import { connect } from 'react-redux';
import axios from 'axios';
import { SidebarDrawer } from '../pages/images';
import { updateImageProbabilityAction } from '../actions/images';
import {
  createImageAction,
  updateImageCategoryAction
} from '../reducers/classifier';
import {
  addCategoryAction,
  createCategoryAction
} from '../reducers/classifier';
import { toggleSpinnerAction } from '../actions/settings';
import { string } from 'prop-types';
import { Dispatch } from 'redux';
import { Classifier } from '../types';

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
        dispatch(createImageAction(result.data.images));
        dispatch(addCategoryAction(result.data.categories));
      })
      .catch(function(error) {
        alert(error);
      });
  };
};

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    images: state.classifier.images,
    categories: state.classifier.categories
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateStore: (data: { images: any; categories: any }) => {
      dispatch(createImageAction(data.images));
      dispatch(addCategoryAction(data.categories));
    },
    updateImageCategory: (
      imgIdentifier: any,
      categoryIdentifier: any,
      categoryName: any
    ) => {
      dispatch(
        updateImageCategoryAction({
          identifier: string,
          categoryIdentifier: string
        })
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
      dispatch(createImageAction({}));
      dispatch(toggleSpinnerAction());
      // dispatch(loadDemoProject(demo));
    }
  };
};

const ConnectedSidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarDrawer);

export default ConnectedSidebar;
