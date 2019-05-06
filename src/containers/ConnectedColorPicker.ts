import { connect } from 'react-redux';
import { ColorPicker } from '../components';

const mapStateToProps = (state: any) => {
  return {
    categories: state.categories
  };
};

const ConnectedColorPicker = connect(mapStateToProps)(ColorPicker);

export default ConnectedColorPicker;
