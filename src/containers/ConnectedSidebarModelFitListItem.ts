import { connect } from 'react-redux';
import { SidebarModelFitListItem } from '../pages/images';
import { Category, Classifier, Image } from '../types';

type State = {
  categories: Category[];
  classifier: Classifier;
  images: Image[];
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.categories,
    images: state.images
  };
};

const ConnectedSidebarModelFitListItem = connect(mapStateToProps)(
  SidebarModelFitListItem
);

export default ConnectedSidebarModelFitListItem;
