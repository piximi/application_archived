import { connect } from 'react-redux';
import { GalleryItemCategoryMenu } from '../pages/images';
import { updateImageCategoryAction } from '../reducers/images';

const mapStateToProps = (state: any) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch: any, props: any) => {
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
