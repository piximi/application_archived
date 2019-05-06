import { connect } from 'react-redux';
import { ColorPicker } from '../components';

const mapStateToProps = (state: any) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = () => {
  return {};
};

const ConnectedColorPicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorPicker);

export default ConnectedColorPicker;
