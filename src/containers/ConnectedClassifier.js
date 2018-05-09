import { connect } from 'react-redux';

import Classifier from '../components/Classifier';
import data from '../images/mnist.json';

const mapStateToProps = state => {
  // categories={data.categories}
  // images={data.images}
  // settings={data.settings}
  state = data;

  return state;
};

const ConnectedClassifier = connect(mapStateToProps)(Classifier);

export default ConnectedClassifier;
