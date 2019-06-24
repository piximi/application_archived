import { connect } from 'react-redux';
import { Label } from './Label';
import { Classifier } from '@piximi/types';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.classifier.categories
  };
};

export const ConnectedLabel = connect(mapStateToProps)(Label);
