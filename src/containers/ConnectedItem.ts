import { connect } from 'react-redux';
import { GalleryItem } from '../pages/images';
import { updateImageCategoryAction } from '../reducers/images';
import { Dispatch } from 'redux';

const mapStateToProps = (state: any) => {
  return {
    images: state.images
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

const ConnectedItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryItem);

export default ConnectedItem;
