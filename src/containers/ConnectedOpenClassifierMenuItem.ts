import { connect } from 'react-redux';
import { OpenClassifierMenuItem } from '../pages/images';
import { Category, Image, Classifier } from '@piximi/types';
import { Dispatch } from 'redux';
import { openClassifierAction } from '@piximi/store';

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
    openClassifier: (categories: Category[], images: Image[], name: string) => {
      const payload = {
        categories: categories,
        images: images,
        name: name
      };

      const action = openClassifierAction(payload);

      dispatch(action);
    }
  };
};

const ConnectedOpenExampleClassifierDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenClassifierMenuItem);

export default ConnectedOpenExampleClassifierDialog;
