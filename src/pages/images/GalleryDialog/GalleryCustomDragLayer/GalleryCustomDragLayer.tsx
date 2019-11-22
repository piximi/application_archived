import * as React from 'react';
// import './GalleryCustomDragLayer.css';

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 9999,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
};

const getItemStyles = (props: {
  draggedItem?: any;
  item?: any;
  itemType?: any;
  isDragging?: any;
  currentOffset?: any;
}) => {
  const { currentOffset } = props;

  if (!currentOffset) {
    return {
      display: 'none'
    };
  }

  const { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform: transform,
    WebkitTransform: transform
  };
};

let swapArrayElements = (
  arr: JSX.Element[],
  indexA: number,
  indexB: number
) => {
  const temp = arr[indexA];

  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
};

export const GalleryCustomDragLayer = (props: {
  draggedItem?: any;
  item?: any;
  itemType?: any;
  isDragging?: any;
  currentOffset?: any;
}) => {
  const { item, itemType, isDragging } = props;

  // const spec = {
  //   collect: (monitor, props) => {
  //     return {
  //       item: monitor.getItem(),
  //       itemType: monitor.getItemType(),
  //       currentOffset: monitor.getClientOffset(),
  //       isDragging: monitor.isDragging()
  //     };
  //   }
  // };
  //
  // const collectedProps = useDragLayer(spec);

  const renderItem = (
    type: any,
    item: { item: { identifier: string | null } }
  ) => {
    const list = document.getElementsByClassName('selected');

    let imgSources = [];

    let draggedIndex = 0;

    for (let i = 0; i < list.length; i = i + 1) {
      const element = list[i];

      const imgElement = list[i].childNodes[2];

      // @ts-ignore
      let img = <img key={'draglayerImg' + i} src={imgElement.src} alt="foo" />;

      imgSources.push(img);

      if (element.getAttribute('imgid') === item.item.identifier) {
        draggedIndex = i;
      }
    }

    swapArrayElements(imgSources, draggedIndex, 0);

    return (
      <div id="drag-layer">
        {imgSources} <span>{list.length}</span>{' '}
      </div>
    );
  };

  if (!isDragging) {
    return null;
  }

  return (
    // @ts-ignore
    <div style={layerStyles}>
      <div style={getItemStyles(props)}>{renderItem(itemType, item)}</div>
    </div>
  );
};

// function collect(monitor) {
//   return {
//     item: monitor.getItem(),
//     itemType: monitor.getItemType(),
//     currentOffset: monitor.getClientOffset(),
//     isDragging: monitor.isDragging()
//   };
// }
