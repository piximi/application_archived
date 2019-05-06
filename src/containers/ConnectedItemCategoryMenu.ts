import { connect } from 'react-redux';
import { GalleryItemCategoryMenu } from '../pages/images';
import { updateImageCategoryAction } from '../reducers/images';
import { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateImageCategory: (identifier: string, categoryIdentifier: string) => {
      const payload = {
        identifier: identifier,
        categoryIdentifier: categoryIdentifier
      };

      const action = updateImageCategoryAction(payload);

      dispatch(action);
    }
  };
};

const mapStateToProps = (state: any) => {
  return {
    categories: state.categories
  };
};

const ConnectedItemCategoryMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryItemCategoryMenu);

export default ConnectedItemCategoryMenu;
