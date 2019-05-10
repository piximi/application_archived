import React from 'react';
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__ as dnd } from 'react-dnd';
const { useDrag } = dnd;

const ImageDragSource = (props: {
  children: any;
  selectedItems: any;
  onmousedown: any;
  item: any;
}) => {
  const { children, selectedItems, onmousedown, item } = props;

  const spec = {
    item: {
      id: item.identifier,
      type: 'image'
    }
  };

  const [, dragSource] = useDrag(spec);

  const selected = selectedItems.includes(item.identifier);

  return (
    <div
      key={'div' + item.identifier}
      ref={dragSource}
      onMouseDown={() => onmousedown(item.identifier)}
      className={selected ? 'selected' : 'unselected'}
    >
      {children}
    </div>
  );
};

export default ImageDragSource;
