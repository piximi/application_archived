import { connect } from 'react-redux';
import { ColorPicker } from '../components';
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
