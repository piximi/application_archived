import { connect } from 'react-redux';
import ItemCategoryMenu from '../components/Gallery/ItemCategoryMenu/ItemCategoryMenu';

const mapStateToProps = (state: any) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {};
};

const ConnectedItemCategoryMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCategoryMenu);

export default ConnectedItemCategoryMenu;
