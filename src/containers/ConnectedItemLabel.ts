import { connect } from 'react-redux';
import ItemLabel from '../components/Gallery/ItemLabel/ItemLabel';

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {};
};

const mapStateToProps = (state: any, props: any) => {
  return {
    categories: state.categories
  };
};

const ConnectedItemLabel = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemLabel);

export default ConnectedItemLabel;
