import { connect } from 'react-redux';
import { SidebarOpenListItem } from '../pages/images';
import { createCategoryAction, createImageAction } from '@piximi/store';
import { Dispatch } from 'redux';
import { Classifier } from '@piximi/types';

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
    }
  };
};

const ConnectedSidebarOpenListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarOpenListItem);

export default ConnectedSidebarOpenListItem;
