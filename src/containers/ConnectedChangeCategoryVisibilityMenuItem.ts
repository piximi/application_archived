import { connect } from 'react-redux';
import { updateCategoryVisibilityAction } from '@piximi/store';
import { ChangeCategoryVisibilityMenuItem } from '../pages/images';
import { Classifier } from '@piximi/types';
import { Dispatch } from 'redux';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    classifier: state.classifier
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    makeCategoryInvisible: (
      categoryIdentifier: string,
      visibility: boolean
    ) => {
      const payload = { identifier: categoryIdentifier, visible: visibility };
      const action = updateCategoryVisibilityAction(payload);

      dispatch(action);
    }
  };
};

const ConnectedChangeCategoryVisibilityMenuItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeCategoryVisibilityMenuItem);

export default ConnectedChangeCategoryVisibilityMenuItem;
