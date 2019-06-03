import { connect } from 'react-redux';
import { ColorPicker } from '@piximi/components';
import { Classifier } from '@piximi/types';

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
