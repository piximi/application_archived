import { connect } from 'react-redux';

import {
  toggleHelpDialogAction,
  toggleSendFeedbackDialogAction,
  toggleSettingsDialogAction
} from '../actions/settings';
import Sidebar from '../components/Sidebar';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    toggleHelpDialog: () => dispatch(toggleHelpDialogAction()),
    toggleSendFeedbackDialog: () => dispatch(toggleSendFeedbackDialogAction()),
    toggleSettingsDialog: () => dispatch(toggleSettingsDialogAction())
  };
};

const ConnectedSidebar = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default ConnectedSidebar;
