import { connect } from 'react-redux';

import { changeSettingsDialogTabAction } from '../actions/settings';
import SettingsDialog from '../components/SettingsDialog';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    changeSettingsDialogTab: (event, value) => {
      dispatch(changeSettingsDialogTabAction(value));
    }
  };
};

const ConnectedSettingsDialog = connect(mapStateToProps, mapDispatchToProps)(
  SettingsDialog
);

export default ConnectedSettingsDialog;
