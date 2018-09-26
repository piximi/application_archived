import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import Category from './Category';

it('renders without crashing', () => {
  // // Obtain the reference to the component before React DnD wrapping
  // const OriginalCategory = Category.DecoratedComponent;
  // // Stub the React DnD connector functions with an identity function
  // const identity = el => el;
  // // Render with one set of props and test
  // const tree = TestUtils.renderIntoDocument(
  //   <OriginalCategory name="foo" connectDropTarget={identity} />
  // );
  // let textInput = TestUtils.scryRenderedDOMComponentsWithTag(tree, 'input')[0];
  // expect(textInput.getAttribute('type')).toEqual('text');
  // let checkboxInput = TestUtils.scryRenderedDOMComponentsWithTag(
  //   tree,
  //   'input'
  // )[1];
  // expect(checkboxInput.getAttribute('type')).toEqual('checkbox');
});
