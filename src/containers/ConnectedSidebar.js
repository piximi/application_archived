import { connect } from 'react-redux';

import {
  toggleHelpDialogAction,
  toggleSettingsDialogAction
} from '../actions/settings';
import Sidebar from '../components/Sidebar';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    toggleHelpDialog: () => dispatch(toggleHelpDialogAction()),
    toggleSettingsDialog: () => dispatch(toggleSettingsDialogAction())
  };
};

const ConnectedSidebar = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default ConnectedSidebar;
