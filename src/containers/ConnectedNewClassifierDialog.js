import { connect } from 'react-redux';
import NewClassifierDialog from '../components/Dialog/NewClassifierDialog/NewClassifierDialog';
import { createClassifierAction } from '../reducers/classifiers';

const mapStateToProps = state => {
  return {
    classifiers: state.classifiers
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    createClassifier: name => {
      const classifier = {
        name: name
      };

      const action = createClassifierAction(classifier);

      dispatch(action);
    }
  };
};

const ConnectedNewClassifierDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewClassifierDialog);

export default ConnectedNewClassifierDialog;
