import React from 'react';
import { ImageViewerDialog } from '../../image';
import { GalleryImage } from '..';
import { useDialog } from '../../../hooks';
import { ConnectedItemLabel } from '../../../containers';
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__ as dnd } from 'react-dnd';
const { useDrag } = dnd;

const GalleryItem = props => {
  const { selectedItems, onmousedown, containerStyle, item } = props;

  const { openedDialog, openDialog, closeDialog } = useDialog();

  const spec = {
    item: {
      id: item.identifier,
      type: 'image'
    }
  };

  const [, dragSource] = useDrag(spec);

  const myContextMenu = e => {
    e.preventDefault();
  };

  const unselectedChannels = item.visualization.visibleChannels;
  const imgSelected = selectedItems.includes(item.identifier);

  return (
    <div
      key={'div' + item.identifier}
      ref={dragSource}
      onMouseDown={() => onmousedown(item.identifier)}
      onContextMenu={myContextMenu}
      className={imgSelected ? 'selected' : 'unselected'}
    >
      <ConnectedItemLabel image={item} />

      <GalleryImage
        key={'img' + item.identifier}
        openImageViewerDialog={openDialog}
        src={item.data}
        brightness={item.brightness}
        contrast={item.contrast}
        unselectedChannels={unselectedChannels}
        height={containerStyle.height}
        width={0.9 * containerStyle.width}
      />

      <ImageViewerDialog
        onClose={closeDialog}
        open={openedDialog}
        src={item.data}
        imgIdentifier={item.identifier}
        brightness={item.brightness}
      />
    </div>
  );
};

export default GalleryItem;
