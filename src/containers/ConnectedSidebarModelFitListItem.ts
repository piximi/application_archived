import { connect } from 'react-redux';
import { SidebarClassifierFitListItem } from '../pages/images';
import { Category, Classifier, Image } from '../types';

type State = {
  categories: Category[];
  classifier: Classifier;
  images: Image[];
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.categories,
    classifier: state.classifier,
    images: state.images
  };
};

const ConnectedSidebarModelFitListItem = connect(mapStateToProps)(
  SidebarClassifierFitListItem
);

export default ConnectedSidebarModelFitListItem;
