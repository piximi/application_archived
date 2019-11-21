import { connect } from 'react-redux';
import { GalleryDialog } from './GalleryDialog';
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

export const ConnectedGalleryDialog = connect(mapStateToProps)(GalleryDialog);
