import { connect } from 'react-redux';
import { GalleryItem } from '../pages/images';
import { updateImageCategoryAction } from '../reducers/images';

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

const mapStateToProps = (state: any, props: any) => {
  return {
    images: state.images
  };
};

const ConnectedItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryItem);

export default ConnectedItem;
