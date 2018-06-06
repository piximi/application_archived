import { connect } from 'react-redux';

import { toggleSidebarAction, updateSettingColumns } from '../actions/settings';

import Primary from '../components/Primary/Primary';

const mapStateToProps = state => {
  return {
    ...state.settings,
    images: state.images.images
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSettingColumns: event => {
      const columns = event.target.value;
      dispatch(updateSettingColumns(columns));
    },
    toggleSidebar: () => {
      dispatch(toggleSidebarAction());
    }
  };
};

const ConnectedPrimary = connect(mapStateToProps, mapDispatchToProps)(Primary);

export default ConnectedPrimary;
