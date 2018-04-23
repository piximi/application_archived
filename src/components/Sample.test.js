import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import Sample from './Sample';

it('renders without crashing', () => {
  // Obtain the reference to the component before React DnD wrapping
  const OriginalSample = Sample.DecoratedComponent;

  // Stub the React DnD connector functions with an identity function
  const identity = el => el;

  // Render with one set of props and test
  const tree = TestUtils.renderIntoDocument(
    <OriginalSample connectDragSource={identity} pathname="foo.png" />
  );

  let img = TestUtils.findRenderedDOMComponentWithTag(tree, 'img');
  expect(img.getAttribute('src')).toEqual('foo.png');
});
