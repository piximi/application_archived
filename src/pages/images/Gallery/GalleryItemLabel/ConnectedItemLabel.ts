import { connect } from 'react-redux';
import { GalleryItemLabel } from './GalleryItemLabel';
import { Classifier } from '@piximi/types';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.classifier.categories
  };
};

export const ConnectedItemLabel = connect(mapStateToProps)(GalleryItemLabel);
