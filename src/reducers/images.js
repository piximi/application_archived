// import {
//   ADD_IMAGES,
//   UPDATE_IMAGE_CATEGORY,
//   UPDATE_IMAGE_VISIBILTY_BASED_ON_CATEGORY,
//   UPDATE_IMAGE_VISIBILITY,
//   SET_IMAGE_CATEGORY_TO_NULL_BASED_ON_CATEGORY,
//   ONLY_SHOW_IMAGES_WITH_CERTAIN_CATEGORY,
//   UPDATE_PROBABILITY,
//   UPDATE_CATEGORY_AND_PROBABILITY,
//   UPDATE_BRIGHTNESS,
//   UPDATE_BRIGHTNESS_FOR_ALL_IMAGES,
//   UPDATE_CONTRAST,
//   UPDATE_CONTRAST_FOR_ALL_IMAGES,
//   UPDATE_UNSELECTED_CHANNELS,
//   UPDATE_UNSELECTED_CHANNELS_FOR_ALL_IMAGES,
//   DELETE_IMAGES
// } from '../constants';
//
// const images = (state = {}, action) => {
//   let images = {};
//   switch (action.type) {
//     // Call to add images to the store
//     case ADD_IMAGES:
//       return { ...action.images };
//
//     // Update image visbility
//     case UPDATE_IMAGE_VISIBILITY:
//       return { ...action.images };
//
//     // Call to update category of images
//     case UPDATE_IMAGE_CATEGORY:
//       images = { ...state };
//       for (let imgIdentifier of action.imgIdentifiers) {
//         images[imgIdentifier].category = action.categoryIdentifier;
//         images[imgIdentifier].categoryName = action.categoryName;
//       }
//       return images;
//
//     // Call to update the visibility of an image, helpful for filtering
//     case UPDATE_IMAGE_VISIBILTY_BASED_ON_CATEGORY:
//       images = { ...state };
//       for (let key in images) {
//         if (images[key].category === action.categoryIdentifier) {
//           images[key].visible = action.value;
//         }
//       }
//       return images;
//
//     // Call to make only images with a certain category visible
//     case ONLY_SHOW_IMAGES_WITH_CERTAIN_CATEGORY:
//       images = { ...state };
//       for (let key in images) {
//         if (images[key].category === action.categoryIdentifier) {
//           images[key].visible = true;
//         } else {
//           images[key].visible = false;
//         }
//       }
//       return images;
//
//     // Call to update images that have a certain category, helpful when a category was deleted
//     case SET_IMAGE_CATEGORY_TO_NULL_BASED_ON_CATEGORY:
//       images = { ...state };
//       for (let key in images) {
//         if (images[key].category === action.categoryIdentifier) {
//           images[key].category = null;
//         }
//       }
//       return images;
//
//     // Call to update the image probability, helpful for relabeling
//     case UPDATE_PROBABILITY:
//       images = { ...state };
//       for (let imgIdentifier of action.imgIdentifiers) {
//         images[imgIdentifier].probability = action.probability;
//       }
//       return images;
//
//     // Call to update image category and probability, helpful for setting predictions
//     case UPDATE_CATEGORY_AND_PROBABILITY:
//       images = { ...state };
//       for (let key in action.predictions) {
//         images[key].category = action.predictions[key].category;
//         images[key].probability = action.predictions[key].probability;
//       }
//       return images;
//
//     // Call to update brightness of one specific image
//     case UPDATE_BRIGHTNESS:
//       images = { ...state };
//       images[action.imgIdentifier].brightness = action.brightness;
//       return images;
//
//     // Call to update brightness of all images, helpful for imageViewer set brightness component
//     case UPDATE_BRIGHTNESS_FOR_ALL_IMAGES:
//       images = { ...state };
//       for (let key in images) {
//         images[key].brightness = action.brightness;
//       }
//       return images;
//
//     // Call to update contrast of one specific image
//     case UPDATE_CONTRAST:
//       images = { ...state };
//       images[action.imgIdentifier].contrast = action.contrast;
//       return images;
//
//     // Call to update contrast of all images, helpful for imageViewer set contrast component
//     case UPDATE_CONTRAST_FOR_ALL_IMAGES:
//       images = { ...state };
//       for (let key in images) {
//         images[key].contrast = action.contrast;
//       }
//       return images;
//
//     // Call to update unselected channels of one specific image
//     case UPDATE_UNSELECTED_CHANNELS:
//       images = { ...state };
//       images[action.imgIdentifier].unselectedChannels =
//         action.unselectedChannels;
//       return images;
//
//     // Call to update unselected channels of all images, helpful for imageViewer set contrast component
//     case UPDATE_UNSELECTED_CHANNELS_FOR_ALL_IMAGES:
//       images = { ...state };
//       for (let key in images) {
//         images[key].unselectedChannels = action.unselectedChannels;
//       }
//       return images;
//
//     // Call to delete images from store
//     case DELETE_IMAGES:
//       images = { ...state };
//       for (let imgIdentifier of action.imgIdentifiers) {
//         delete images[imgIdentifier];
//       }
//       return images;
//
//     default:
//       return state;
//   }
// };
//
// export default images;

import { createAction, createReducer } from 'redux-starter-kit';

export const createImageAction = createAction('images/create');

export const updateImageCategoryAction = createAction(
  'images/image/update-category'
);

const findImageIndex = (images, identifier) => {
  return images.findIndex(image => image.identifier === identifier);
};

const images = createReducer([], {
  [createImageAction]: (state, action) => {
    const image = action.payload;

    state.push(image);
  },
  [updateImageCategoryAction]: (state, action) => {
    const { identifier, categoryIdentifier } = action.payload;

    const index = findImageIndex(state, identifier);

    const image = state[index];

    image.categoryIdentifier = categoryIdentifier;
  }
});

export default images;
