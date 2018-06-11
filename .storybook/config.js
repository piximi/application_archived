import { configure } from '@storybook/react';

import '@storybook/addon-console';

function loadStories() {
  require('../src/stories/Categories');
  require('../src/stories/Category');
  // require('../src/stories/Classifier');
  require('../src/stories/CreateCategoryDialog');
  require('../src/stories/Gallery');
  require('../src/stories/HelpDialog');
  require('../src/stories/Image');
  require('../src/stories/Images');
  require('../src/stories/Main');
  require('../src/stories/Primary');
  require('../src/stories/SendFeedbackDialog');
  require('../src/stories/SettingsDialog');
  require('../src/stories/SettingsDialogTabContainer');
  // require('../src/stories/Sidebar');
  require('../src/stories/Settings');
  require('../src/stories/UploadDialog');
}

configure(loadStories, module);
