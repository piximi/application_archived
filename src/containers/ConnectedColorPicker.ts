import { connect } from 'react-redux';
import { ColorPicker } from '@cytoai/components';
import { Classifier } from '../types';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.classifier.categories
  };
};

const ConnectedColorPicker = connect(mapStateToProps)(ColorPicker);

export default ConnectedColorPicker;
