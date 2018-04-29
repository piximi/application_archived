import React from 'react';
import ReactDOM from 'react-dom';
import Images from './Images';
import TestUtils from 'react-dom/test-utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Images pathnames={['foo.png']} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
