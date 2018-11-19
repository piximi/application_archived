import { configure } from '@storybook/react';

import '@storybook/addon-console';

function loadStories() {
  require('../src/stories/Settings');
}

configure(loadStories, module);
