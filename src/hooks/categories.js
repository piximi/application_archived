import React, { useState } from 'react';
import { Map } from 'immutable';
import { uuid4 } from 'uuid';

export function useCategories() {
  const [categories, setCategories] = useState(Map([]));

  const create = category => {
    const identifier = uuid4();

    update(identifier, category);
  };

  const retrieve = identifier => {
    categories.find(category => {
      return category.identifier === identifier;
    });
  };

  const destroy = identifier => {
    setCategories(categories.delete(identifier));
  };

  const update = (identifier, category) => {
    setCategories(categories.set(identifier, category));
  };

  return { categories };
}
