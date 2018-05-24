import { connect } from 'react-redux';

import {
  updateSettingSidebarOpenAction,
  updateSettingColumns
} from '../actions/settings';

import Primary from '../components/Primary';

const mapStateToProps = state => {
  return state.settings;
};

const mapDispatchToProps = dispatch => {
  return {
    updateSettingSidebarOpen: () => {
      dispatch(updateSettingSidebarOpenAction({}));
    },

    updateSettingColumns: event => {
      const columns = event.target.value;

      dispatch(updateSettingColumns(columns));
    }
  };
};

const ConnectedPrimary = connect(mapStateToProps, mapDispatchToProps)(Primary);

export default ConnectedPrimary;
