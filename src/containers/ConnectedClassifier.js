import { connect } from 'react-redux';

import Classifier from '../components/Classifier';

const mapStateToProps = state => {
  return state;
};

const ConnectedClassifier = connect(mapStateToProps)(Classifier);

export default ConnectedClassifier;
