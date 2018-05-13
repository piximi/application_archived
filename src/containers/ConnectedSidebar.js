import { connect } from 'react-redux';

import {
  closeSettingsDialogAction,
  openSettingsDialogAction
} from '../actions/settings';
import Sidebar from '../components/Sidebar';

const mapStateToProps = state => {
  return state.settings;
};

const mapDispatchToProps = dispatch => {
  return {
    closeSettingsDialog: () => {
      dispatch(closeSettingsDialogAction({}));
    },
    openSettingsDialog: () => {
      dispatch(openSettingsDialogAction({}));
    }
  };
};

const ConnectedSidebar = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default ConnectedSidebar;
