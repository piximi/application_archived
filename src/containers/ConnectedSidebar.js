import { connect } from 'react-redux';

import { toggleModelCollapseAction } from '../actions/settings';
import Sidebar from '../components/Sidebar/Sidebar';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModelCollapse: () => dispatch(toggleModelCollapseAction())
  };
};

const ConnectedSidebar = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default ConnectedSidebar;
