import { connect } from 'react-redux';
import { Classifier } from '@piximi/types';
import { FitClassifierDialog } from '../pages/images/FitClassifierDialog/FitClassifierDialog';

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

export const ConnectedFitClassifierDialog = connect(mapStateToProps)(
  FitClassifierDialog
);
