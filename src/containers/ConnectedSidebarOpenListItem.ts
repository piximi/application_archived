import { connect } from 'react-redux';
// import axios from 'axios';
import { SidebarOpenListItem } from '../pages/images';
import { createCategoryAction, createImageAction } from '@piximi/store';
import { Dispatch } from 'redux';
import { Classifier } from '../types';

// const loadDemoProject = (demo: string) => {
//   return (dispatch: any) => {
//     return axios
//       .get(
//         ' https://raw.githubusercontent.com/piximi/application/master/src/demos/' +
//           demo +
//           '.piximi'
//       )
//       .then(result => {
//         // dispatch(updateSpinnerSpinningAction());
//
//         for (let image of result.data.images) {
//           const payload = {
//             image: image
//           };
//
//           const action = createImageAction(payload);
//
//           dispatch(action);
//         }
//
//         for (let category of result.data.categories) {
//           const payload = {
//             category: category
//           };
//
//           const action = createCategoryAction(payload);
//
//           dispatch(action);
//         }
//       })
//       .catch(function(error) {
//         alert(error);
//       });
//   };
// };

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
      for (let image of data.images) {
        const payload = {
          image: image
        };

        const action = createImageAction(payload);

        dispatch(action);
      }

      for (let category of data.categories) {
        const payload = {
          category: category
        };

        const action = createCategoryAction(payload);

        dispatch(action);
      }
    },
    loadDemoProject: (demo: string) => {
      dispatch(createImageAction({}));
      // dispatch(updateSpinnerSpinningAction());
      // dispatch(loadDemoProject(demo));
    }
  };
};

const ConnectedSidebarOpenListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarOpenListItem);

export default ConnectedSidebarOpenListItem;
