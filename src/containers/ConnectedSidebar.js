import { connect } from 'react-redux';

import {
  toggleHelpDialogAction,
  toggleModelCollapseAction,
  toggleSendFeedbackDialogAction,
  toggleSettingsDialogAction
} from '../actions/settings';
import Sidebar from '../components/Sidebar/Sidebar';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    toggleHelpDialog: () => dispatch(toggleHelpDialogAction()),
    toggleModelCollapse: () => dispatch(toggleModelCollapseAction()),
    toggleSendFeedbackDialog: () => dispatch(toggleSendFeedbackDialogAction()),
    toggleSettingsDialog: () => dispatch(toggleSettingsDialogAction())
  };
};

const ConnectedSidebar = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default ConnectedSidebar;
