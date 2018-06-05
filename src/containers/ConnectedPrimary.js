import { connect } from 'react-redux';

import {
  toggleSidebarAction,
  updateSettingSidebarOpenAction,
  updateSettingColumns
} from '../actions/settings';

import { sortImages } from '../actions/images';

import Primary from '../components/Primary';

const mapStateToProps = state => {
  return {
    ...state.settings,
    images: state.images.images
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSettingSidebarOpen: () => {
      dispatch(updateSettingSidebarOpenAction({}));
    },

    updateSettingColumns: event => {
      const columns = event.target.value;
      dispatch(updateSettingColumns(columns));
    },
    toggleSidebar: () => {
      dispatch(toggleSidebarAction());
    },
    sortImages: () => {
      dispatch(sortImages());
    }
  };
};

const ConnectedPrimary = connect(mapStateToProps, mapDispatchToProps)(Primary);

export default ConnectedPrimary;
