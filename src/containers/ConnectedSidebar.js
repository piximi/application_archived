import { connect } from 'react-redux';
import { toggleModelCollapseAction } from '../actions/settings';
import Sidebar from '../components/Sidebar/Sidebar';
import { addImagesAction } from '../actions/images';
import { addCategoriesAction } from '../actions/categories';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModelCollapse: () => dispatch(toggleModelCollapseAction()),
    updateStore: data => {
      dispatch(addImagesAction(data.images));
      dispatch(addCategoriesAction(data.categories));
    }
  };
};

const ConnectedSidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default ConnectedSidebar;
