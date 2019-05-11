import { connect } from 'react-redux';
import { createCategoryAction } from '@cytoai/store/dist';
import { CreateCategoryDialog } from '../pages/images';
import uuidv4 from 'uuid';
import { Dispatch } from 'redux';
import { Classifier } from '../types';

let index = 0;

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
    createCategory: (color: string, description: string) => {
      const category = {
        color: color,
        description: description,
        identifier: uuidv4(),
        index: index++,
        visible: true
      };

      const payload = { category: category };

      const action = createCategoryAction(payload);

      dispatch(action);
    }
  };
};

const ConnectedCreateCategoryDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCategoryDialog);

export default ConnectedCreateCategoryDialog;
