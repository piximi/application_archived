import React from 'react';
import ReactDOM from 'react-dom';
import Sample from './Sample';
import TestUtils from 'react-dom/test-utils';

it('renders without crashing', () => {
  // Obtain the reference to the component before React DnD wrapping
  const OriginalSample = Sample.DecoratedComponent;

  // Stub the React DnD connector functions with an identity function
  const identity = el => el;

  // Render with one set of props and test
  const tree = TestUtils.renderIntoDocument(
    <OriginalSample connectDragSource={identity} pathname="foo.png" />
  );

  let div = TestUtils.scryRenderedDOMComponentsWithTag(tree, 'div')[1];

  expect(div.className).toContain('lazyload-placeholder');
});
