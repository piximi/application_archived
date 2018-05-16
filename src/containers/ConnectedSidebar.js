import { connect } from 'react-redux';

import {
  closeSettingsDialogAction,
  openSettingsDialogAction,
  toggleHelpDialogAction
} from '../actions/settings';
import Sidebar from '../components/Sidebar';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    closeSettingsDialog: () => {
      dispatch(closeSettingsDialogAction({}));
    },
    openSettingsDialog: () => {
      dispatch(openSettingsDialogAction({}));
    },
    toggleHelpDialog: () => {
      dispatch(toggleHelpDialogAction());
    }
  };
};

const ConnectedSidebar = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default ConnectedSidebar;
