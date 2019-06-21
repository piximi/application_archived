import { connect } from 'react-redux';
import { Gallery } from '../pages/images';
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

const ConnectedGallery = connect(mapStateToProps)(Gallery);

export default ConnectedGallery;
