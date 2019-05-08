import { connect } from 'react-redux';
import { GalleryItemLabel } from '../pages/images';
import { Classifier } from '../types';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.classifier.categories
  };
};

const ConnectedItemLabel = connect(mapStateToProps)(GalleryItemLabel);

export default ConnectedItemLabel;
