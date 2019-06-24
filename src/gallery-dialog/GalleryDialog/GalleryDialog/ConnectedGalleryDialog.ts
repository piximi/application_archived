import { connect } from 'react-redux';
import { Classifier } from '@piximi/types';
import { GalleryDialog } from './GalleryDialog';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    images: state.classifier.images,
    categories: state.classifier.categories
  };
};

export const ConnectedGalleryDialog = connect(mapStateToProps)(GalleryDialog);
