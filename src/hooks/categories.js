import React, { useState } from 'react';
import { Map } from 'immutable';
import { uuid4 } from 'uuid';

export function useCategories() {
  const [categories, setCategories] = useState(Map());

  const create = category => {
    const identifier = uuid4();

    update(identifier, category);
  };

  const destroy = identifier => {
    setCategories(categories.delete(identifier));
  };

  const hide = identifier => {
    const category = retrieve(identifier);

    update(identifier, { ...category, visible: false });
  };

  const relabel = (identifier, color) => {
    const category = retrieve(identifier);

    update(identifier, { ...category, color: color });
  };

  const rename = (identifier, name) => {
    const category = retrieve(identifier);

    update(identifier, { ...category, name: name });
  };

  const retrieve = identifier => {
    return categories.get(identifier);
  };

  const show = identifier => {
    const category = retrieve(identifier);

    update(identifier, { ...category, visible: true });
  };

  const update = (identifier, category) => {
    setCategories(categories.set(identifier, category));
  };

  return {
    categories,
    create,
    destroy,
    hide,
    relabel,
    rename,
    retrieve,
    show,
    update
  };
}
