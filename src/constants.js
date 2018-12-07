export const ADD_CATEGORIES = 'ADD_CATEGORIES';

export const CREATE_CATEGORY = 'CREATE_CATEGORY';

export const DELETE_CATEGORY = 'DELETE_CATEGORY';

export const UPDATE_CATEGORY_DESCRIPTION = 'UPDATE_CATEGORY_DESCRIPTION';

export const UPDATE_CATEGORY_COLOR = 'UPDATE_CATEGORY_COLOR';

export const UPDATE_CATEGORY_VISIBILITY = 'UPDATE_CATEGORY_VISIBILITY';

export const DISPLAY_THIS_CATEGORY_ONLY = 'DISPLAY_THIS_CATEGORY_ONLY';

export const ADD_IMAGES = 'ADD_IMAGES';

export const DELETE_IMAGE = 'DELETE_IMAGE';

export const UPDATE_PROBABILITY = 'UPDATE_PROBABILITY';

export const UPDATE_IMAGE_CATEGORY = 'UPDATE_IMAGE_CATEGORY';

export const UPDATE_IMAGES_HAVING_CERTAIN_CATEGORY =
  'UPDATE_IMAGES_HAVING_CERTAIN_CATEGORY';

export const UPDATE_IMAGE_VISIBILTY = 'UPDATE_IMAGE_VISIBILTY';

export const UPDATE_UNLABELED_VISIBILITY = 'UPDATE_UNLABELED_VISIBILITY';

export const UPDATE_IMAGE_BRIGHTNESS = 'UPDATE_IMAGE_BRIGHTNESS';

export const UPDATE_SETTING_COLUMNS = 'UPDATE_SETTING_COLUMNS';

export const UPDATE_SETTING_SIDEBAR_OPEN = 'UPDATE_SETTING_SIDEBAR_OPEN';

export const FIT_CLASSIFIER = 'FIT_CLASSIFIER';

export const SAVE_CLASSIFIER = 'SAVE_CLASSIFIER';

export const OPEN_CLASSIFIER = 'OPEN_CLASSIFIER';

export const CLASSIFIER_OPEN = 'CLASSIFIER_OPEN';

export const CLASSIFIER_SAVE = 'CLASSIFIER_SAVE';

export const CLOSE_CREATE_CATEGORY_DIALOG = 'CLOSE_CREATE_CATEGORY_DIALOG';

export const TOGGLE_CREATE_CATEGORY_DIALOG = 'TOGGLE_CREATE_CATEGORY_DIALOG';

export const TOGGLE_CREATE_CATEGORY_COLOR_MENU =
  'TOGGLE_CREATE_CATEGORY_COLOR_MENU';

export const TOGGLE_MODEL_COLLAPSE = 'TOGGLE_MODEL_COLLAPSE';

export const TOGGLE_CATEGORIES_COLLAPSE = 'TOGGLE_CATEGORIES_COLLAPSE';

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const TOGGLE_UPLOAD_DIALOG = 'TOGGLE_UPLOAD_DIALOG';

export const TOGGLE_DELETE_CATEGORY_DIALOG = 'TOGGLE_DELETE_CATEGORY_DIALOG';

export const UPDATE_ZOOM_LEVEL = 'UPDATE_ZOOM_LEVEL';

export const TOOGLE_NEW_IMAGES_EVENT = 'TOOGLE_NEW_IMAGES_EVENT';

export const fields = [
  {
    label: 'image_checksum',
    value: 'identifier'
  },
  {
    label: 'image_pathname',
    value: 'filename'
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
