import { connect } from 'react-redux';
import Gallery from '../components/Gallery';
import { updateSettingColumns } from '../actions/settings';
import { sortImages } from '../actions/images';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    updateSettingColumns: event => {
      const columns = event.target.value;
      dispatch(updateSettingColumns(columns));
    },
    sortImages: () => {
      dispatch(sortImages());
    }
  };
};

const ConnectedGallery = connect(mapStateToProps, mapDispatchToProps)(Gallery);

export default ConnectedGallery;
