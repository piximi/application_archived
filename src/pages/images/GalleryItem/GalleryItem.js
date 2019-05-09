import React from 'react';
import { ImageViewerDialog } from '../../image';
import { GalleryImage } from '..';
import { useDialog } from '../../../hooks';
import { ConnectedItemLabel } from '../../../containers';
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__ as dnd } from 'react-dnd';
const { useDrag } = dnd;

// const itemSource = {
//   beginDrag(props) {
//     const imgId = props.item.id;
//     // Set global dragged item to this item
//     props.ondrag(imgId);
//     return {
//       item: props.item,
//       selectedItems: props.selectedItems
//     };
//   },
//   endDrag(props, monitor, component) {
//     props.ondrag(null);
//     if (monitor.getDropResult() !== null) {
//       const categoryIdentifier = monitor.getDropResult().categoryIdentifier;
//       const identifiers = monitor.getDropResult().selectedItems;
//
//       for (const identifier of identifiers) {
//         props.updateImageCategory(identifier, categoryIdentifier);
//       }
//     }
//     if (!monitor.didDrop()) {
//       return;
//     }
//   }
// };

const GalleryItem = props => {
  const { selectedItems, onmousedown, containerStyle, item } = props;

  const { openedDialog, openDialog, closeDialog } = useDialog();

  const spec = {
    begin: monitor => {
      return {
        item: item,
        selectedItems: selectedItems
      };
    },
    collect: (monitor, props) => {
      return {
        connectDragSource: monitor.dragSource,
        isDragging: monitor.isDragging(),
        connectDragPreview: monitor.dragPreview
      };
    },
    end: monitor => {
      console.log('end');
    },
    item: {
      id: item.identifier,
      type: 'image'
    }
  };

  const [collectedProps, drag] = useDrag(spec);

  // useEffect(() => {
  //   connectDragPreview(getEmptyImage(), {
  //     captureDraggingState: true
  //   });
  // });

  const myContextMenu = e => {
    e.preventDefault();
  };

  const unselectedChannels = item.visualization.visibleChannels;
  const imgSelected = selectedItems.includes(item.identifier);

  return (
    <div
      key={'div' + item.identifier}
      name={'selectableElement'}
      type={'selectableElement'}
      imgid={item.identifier}
      ref={drag}
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
