import React from 'react';
import { render } from 'react-testing-library';

import useCategories from './categories';

function createExampleCategory(description) {}

function ExampleComponent() {
  const categories = useCategories();

  return <span>{categories}</span>;
}

test('`useCategories` returns an array of categories', () => {
  const { container, rerender } = render(<ExampleComponent />);

  const span = container.firstChild;

  createExampleCategory('foo');

  rerender(<EffecfulComponent />);

  expect(span.textContent).toBe('extra-small');
});
