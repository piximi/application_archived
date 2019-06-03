import { connect } from 'react-redux';
import { SidebarClassifierFitListItem } from '../pages/images';
import { Classifier } from '@piximi/types';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.classifier.categories,
    classifier: state.classifier,
    images: state.classifier.images
  };
};

const ConnectedSidebarClassifierFitListItem = connect(mapStateToProps)(
  SidebarClassifierFitListItem
);

export default ConnectedSidebarClassifierFitListItem;
