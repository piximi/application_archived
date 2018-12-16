export const ADD_CATEGORIES = 'ADD_CATEGORIES';

export const CREATE_CATEGORY = 'CREATE_CATEGORY';

export const DELETE_CATEGORY = 'DELETE_CATEGORY';

export const UPDATE_CATEGORY_DESCRIPTION = 'UPDATE_CATEGORY_DESCRIPTION';

export const UPDATE_CATEGORY_COLOR = 'UPDATE_CATEGORY_COLOR';

export const UPDATE_CATEGORY_VISIBILITY = 'UPDATE_CATEGORY_VISIBILITY';

export const DISPLAY_THIS_CATEGORY_ONLY = 'DISPLAY_THIS_CATEGORY_ONLY';

export const ADD_IMAGES = 'ADD_IMAGES';

export const DELETE_IMAGES = 'DELETE_IMAGES';

export const UPDATE_PROBABILITY = 'UPDATE_PROBABILITY';

export const UPDATE_IMAGE_CATEGORY = 'UPDATE_IMAGE_CATEGORY';

export const SET_IMAGE_CATEGORY_TO_NULL_BASED_ON_CATEGORY =
  'SET_IMAGE_CATEGORY_TO_NULL_BASED_ON_CATEGORY';

export const UPDATE_IMAGE_VISIBILITY = 'UPDATE_IMAGE_VISIBILITY';

export const UPDATE_IMAGE_VISIBILTY_BASED_ON_CATEGORY =
  'UPDATE_IMAGE_VISIBILTY_BASED_ON_CATEGORY';

export const UPDATE_BRIGHTNESS = 'UPDATE_BRIGHTNESS';

export const UPDATE_BRIGHTNESS_FOR_ALL_IMAGES =
  'UPDATE_BRIGHTNESS_FOR_ALL_IMAGES';

export const ONLY_SHOW_IMAGES_WITH_CERTAIN_CATEGORY =
  'ONLY_SHOW_IMAGES_WITH_CERTAIN_CATEGORY';

export const UPDATE_UNLABELED_VISIBILITY = 'UPDATE_UNLABELED_VISIBILITY';

export const UPDATE_CATEGORY_AND_PROBABILITY =
  'UPDATE_CATEGORY_AND_PROBABILITY';

export const UPDATE_IMAGE_BRIGHTNESS = 'UPDATE_IMAGE_BRIGHTNESS';

export const FIT_CLASSIFIER = 'FIT_CLASSIFIER';

export const SAVE_CLASSIFIER = 'SAVE_CLASSIFIER';

export const OPEN_CLASSIFIER = 'OPEN_CLASSIFIER';

export const CLASSIFIER_OPEN = 'CLASSIFIER_OPEN';

export const CLASSIFIER_SAVE = 'CLASSIFIER_SAVE';

export const fields = [
  {
    label: 'image_checksum',
    value: 'id'
  },
  {
    label: 'image_pathname',
    value: 'pathname'
  },
  {
    label: 'image_shape_t',
    value: 'image_shape_t'
  },
  {
    label: 'image_shape_p',
    value: 'image_shape_p'
  },
  {
    label: 'image_shape_r',
    value: 'height'
  },
  {
    label: 'image_shape_c',
    value: 'width'
  },
  {
    label: 'image_shape_channels',
    value: 'channels'
  },
  {
    label: 'object_index',
    value: 'object_index'
  },
  {
    label: 'object_bounding_box_minimum_t',
    value: 'object_bounding_box_minimum_t'
  },
  {
    label: 'object_bounding_box_minimum_p',
    value: 'object_bounding_box_minimum_p'
  },
  {
    label: 'object_bounding_box_minimum_r',
    value: 'object_bounding_box_minimum_r'
  },
  {
    label: 'object_bounding_box_minimum_c',
    value: 'object_bounding_box_minimum_c'
  },
  {
    label: 'object_bounding_box_maximum_t',
    value: 'object_bounding_box_maximum_t'
  },
  {
    label: 'object_bounding_box_maximum_p',
    value: 'object_bounding_box_maximum_p'
  },
  {
    label: 'object_bounding_box_maximum_r',
    value: 'height'
  },
  {
    label: 'object_bounding_box_maximum_c',
    value: 'width'
  },
  {
    label: 'object_mask_checksum',
    value: 'object_mask_checksum'
  },
  {
    label: 'object_mask_pathname',
    value: 'object_mask_pathname'
  },
  {
    label: 'object_category',
    value: 'category'
  },
  {
    label: 'object_category_name',
    value: 'categoryName'
  }
];
