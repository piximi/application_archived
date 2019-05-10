import * as React from 'react';
import { Grid, AutoSizer } from 'react-virtualized';
import { ConnectedItem } from '../../../containers';

type Props = {
  decreaseWidth: any;
  selectItem: any;
  images: any;
  selectedItems: any;
  ondrag: any;
  asyncImgLoadingFunc: any;
  callOnDragEnd: any;
  imagesPerRow: any;
  windowWidth: any;
};

const GalleryItems = (props: Props) => {
  const {
    decreaseWidth,
    selectItem,
    images,
    selectedItems,
    ondrag,
    asyncImgLoadingFunc,
    callOnDragEnd,
    imagesPerRow,
    windowWidth
  } = props;

  const [picturesPerRow, setPicturesPerRow] = React.useState(0);
  const [rows, setRows] = React.useState(0);
  const [noImages, setNoImages] = React.useState(0);

  React.useEffect(() => {
    let picturesPerRow = imagesPerRow;

    // Media queries
    if (windowWidth > 0) {
      if (windowWidth - decreaseWidth < 900) picturesPerRow = 5;
      if (windowWidth - decreaseWidth < 850) picturesPerRow = 4;
      if (windowWidth - decreaseWidth < 700) picturesPerRow = 3;
      if (windowWidth - decreaseWidth < 450) picturesPerRow = 2;
      if (windowWidth - decreaseWidth < 200) picturesPerRow = 1;
    }

    const noImages = images.length;
    const quotient = Math.floor(noImages / picturesPerRow);
    const remainder = noImages % picturesPerRow;

    let rowCount = quotient;

    if (remainder !== 0) {
      rowCount = rowCount + 1;
    }

    setPicturesPerRow(picturesPerRow > noImages ? noImages : picturesPerRow);
    setRows(rowCount);
    setNoImages(noImages);
  }, [imagesPerRow, windowWidth, images, decreaseWidth]);

  const onmousedown = (imgId: any) => {
    selectItem(imgId);
  };

  let cellRenderer: ({
    columnIndex,
    key,
    rowIndex,
    style
  }: {
    columnIndex: any;
    key: any;
    rowIndex: any;
    style: any;
  }) => undefined | any;

  cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    let newStyle = { ...style };
    const index = picturesPerRow * rowIndex - 1 + columnIndex + 1;
    if (index > noImages - 1) {
      return;
    }
    return (
      <div key={key} style={newStyle}>
        <ConnectedItem
          key={key}
          item={images[index]}
          containerStyle={style}
          selectedItems={selectedItems}
          onmousedown={onmousedown}
          ondrag={ondrag}
          asyncImgLoadingFunc={asyncImgLoadingFunc}
          callOnDragEnd={callOnDragEnd}
        />
      </div>
    );
  };

  return (
    <AutoSizer>
      {({ height, width }) => {
        const calculatedWidth = width - decreaseWidth;
        const columnWidth = calculatedWidth / picturesPerRow;
        const columnCount =
          picturesPerRow > noImages ? noImages : picturesPerRow;
        return (
          <Grid
            cellRenderer={cellRenderer}
            columnCount={columnCount}
            columnWidth={columnWidth}
            height={height}
            rowCount={rows}
            rowHeight={150}
            width={calculatedWidth}
            style={{ outline: 'none' }}
          />
        );
      }}
    </AutoSizer>
  );
};

export default GalleryItems;
