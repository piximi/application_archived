import { connect } from 'react-redux';
import { OpenExampleClassifierDialog } from '../pages/images';
import { Classifier, Category, Image } from '@piximi/types';
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
    openClassifier: async (
      categories: Category[],
      images: Image[],
      name: string
    ) => {
      const payload: Classifier = {
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
)(OpenExampleClassifierDialog);

export default ConnectedOpenExampleClassifierDialog;
