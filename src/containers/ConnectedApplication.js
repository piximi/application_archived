import { connect } from 'react-redux';

import { fitClassifierAction } from '../actions/classifier';
import Application from '../components/Application/Application';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fit: () => {
      const pathname = '';
      dispatch(fitClassifierAction(pathname));
    }
  };
};

const ConnectedApplication = connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);

export default ConnectedApplication;
