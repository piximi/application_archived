import { connect } from 'react-redux';
import { ColorPicker } from '../components';

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {};
};

const mapStateToProps = (state: any) => {
  return {
    categories: state.categories
  };
};

const ConnectedColorPicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorPicker);

export default ConnectedColorPicker;
