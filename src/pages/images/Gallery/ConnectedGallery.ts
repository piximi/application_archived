import { connect } from 'react-redux';
import { Gallery } from './Gallery';
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

export const ConnectedGallery = connect(mapStateToProps)(Gallery);
