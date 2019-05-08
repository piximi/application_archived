import { connect } from 'react-redux';
import { SidebarSaveListItem } from '../pages/images';
import { Classifier } from '../types';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.classifier.categories,
    images: state.classifier.images
  };
};

const ConnectedSidebarSaveListItem = connect(mapStateToProps)(
  SidebarSaveListItem
);

export default ConnectedSidebarSaveListItem;
