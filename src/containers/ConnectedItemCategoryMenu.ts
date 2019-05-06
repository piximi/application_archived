import { connect } from 'react-redux';
import { GalleryItemCategoryMenu } from '../pages/images';
import { updateImageCategoryAction } from '../reducers/images';
import { Dispatch } from 'redux';
import { Category } from '../types';

const mapStateToProps = (state: { categories: Category[] }) => {
  return {
    categories: state.categories
  };
};

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

const ConnectedItemCategoryMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryItemCategoryMenu);

export default ConnectedItemCategoryMenu;
