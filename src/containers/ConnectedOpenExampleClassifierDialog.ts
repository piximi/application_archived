import { connect } from 'react-redux';
import { OpenExampleClassifierDialog } from '../pages/images';
import { Classifier } from '../types';
import { Dispatch } from 'redux';
import * as uuid from 'uuid';
import { createClassifierAction } from '@piximi/store';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.classifier.categories
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    openClassifier: async (name: string) => {
      const classifier = {
        identifier: uuid.v4(),
        name: name
      };

      const action = createClassifierAction(classifier);

      dispatch(action);
    }
  };
};

const ConnectedOpenExampleClassifierDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenExampleClassifierDialog);

export default ConnectedOpenExampleClassifierDialog;
