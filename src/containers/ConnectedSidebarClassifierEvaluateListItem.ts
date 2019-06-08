import { connect } from 'react-redux';
import { SidebarClassifierEvaluateListItem } from '../pages/images';
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

const ConnectedSidebarClassifierEvaluateListItem = connect(mapStateToProps)(
  SidebarClassifierEvaluateListItem
);

export default ConnectedSidebarClassifierEvaluateListItem;
