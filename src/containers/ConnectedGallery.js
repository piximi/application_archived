import { connect } from 'react-redux';
import Gallery from '../components/Gallery/Gallery';
import {
  toggleUploadDialogAction,
  updateSettingColumnsAction
} from '../actions/settings';
import { sortImages } from '../actions/images';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    updateSettingColumnsAction: event => {
      const columns = event.target.value;
      dispatch(updateSettingColumnsAction(columns));
    },
    sortImages: () => {
      dispatch(sortImages());
    },
    toggleUploadDialog: () => {
      dispatch(toggleUploadDialogAction());
    }
  };
};

const ConnectedGallery = connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);

export default ConnectedGallery;
