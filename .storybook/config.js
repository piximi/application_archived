import { configure } from '@storybook/react';

function loadStories() {
    require('../stories/Application');
}

configure(loadStories, module);
