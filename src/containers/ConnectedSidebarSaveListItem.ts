import { connect } from 'react-redux';
import { SidebarCategoriesList } from '../pages/images';
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

const mapDispatchToProps = () => {};

const ConnectedSidebarSaveListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarCategoriesList);

export default ConnectedSidebarSaveListItem;
