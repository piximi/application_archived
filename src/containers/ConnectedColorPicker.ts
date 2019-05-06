import { connect } from 'react-redux';
import { ColorPicker } from '../components';

const mapStateToProps = (state: { categories: any }) => {
  return {
    categories: state.categories
  };
};

const ConnectedColorPicker = connect(mapStateToProps)(ColorPicker);

export default ConnectedColorPicker;
