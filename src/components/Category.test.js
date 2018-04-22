import React from 'react';
import ReactDOM from 'react-dom';
import Category from './Category';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Category name="foo" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
