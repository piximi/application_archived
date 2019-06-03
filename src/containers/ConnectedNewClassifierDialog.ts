import { connect } from 'react-redux';
import { NewClassifierDialog } from '../pages/images';
import { createClassifierAction } from '@piximi/store';
import { Classifier } from '@piximi/types';
import * as uuid from 'uuid';
import { Dispatch } from 'redux';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return state.classifier;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    openClassifier: (name: string) => {
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
