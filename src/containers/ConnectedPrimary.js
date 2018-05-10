import { connect } from 'react-redux';

import { updateSettingSidebarOpenAction } from '../actions/settings';
import Primary from '../components/Primary';

const mapStateToProps = state => {
  return state.settings;
};

const mapDispatchToProps = dispatch => {
  return {
    updateSettingSidebarOpen: () => {
      dispatch(updateSettingSidebarOpenAction({}));
    }
  };
};

const ConnectedPrimary = connect(mapStateToProps, mapDispatchToProps)(Primary);

export default ConnectedPrimary;
