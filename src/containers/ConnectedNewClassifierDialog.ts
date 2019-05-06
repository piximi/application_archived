import { connect } from 'react-redux';
import { NewClassifierDialog } from '../pages/images';
import { createClassifierAction } from '../reducers/classifier';
import { Classifier } from '../types';
import * as uuid from 'uuid';
import { Dispatch } from 'redux';

const mapStateToProps = (state: { classifier: Classifier }) => {
  return state.classifier;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createClassifier: (name: string) => {
      const classifier = {
        identifier: uuid.v4(),
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
