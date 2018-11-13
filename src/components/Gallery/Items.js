import React from 'react';
import Item from './Item';
import {
  CellMeasurer,
  CellMeasurerCache,
  Grid,
  AutoSizer
} from 'react-virtualized';

// In this example, average cell height is assumed to be about 50px.
// This value will be used for the initial `Grid` layout.
// Width is not dynamic.
const cache = new CellMeasurerCache({
  defaultHeight: 150,
  fixedWidth: true
});

const Items = props => {
  const onmousedown = imgId => {
    props.selectItem(imgId);
  };
  const picturesPerRow = props.imagesPerRow;
  const length = props.images.length;
  const quotient = Math.floor(length / picturesPerRow);
  const remainder = length % picturesPerRow;
  let rowCount = quotient;
  if (remainder !== 0) {
    rowCount = rowCount + 1;
  }

  const cellRenderer = function({ columnIndex, key, rowIndex, style, parent }) {
    let newStyle = { ...style };
    const newPicturesPerRow = picturesPerRow > length ? length : picturesPerRow;
    const index = newPicturesPerRow * rowIndex - 1 + columnIndex + 1;
    if (index > length - 1) {
      return;
    }
    return (
      <CellMeasurer
        cache={cache}
        columnIndex={columnIndex}
        key={key}
        parent={parent}
        rowIndex={rowIndex}
      >
        {({ measure }) => (
          <div key={key} style={newStyle}>
            <Item
              item={props.images[index]}
              containerStyle={style}
              key={key}
              selectedItems={props.selectedItems}
              onmousedown={onmousedown}
              ondrag={props.ondrag}
              asyncImgLoadingFunc={props.asyncImgLoadingFunc}
            />
          </div>
        )}
      </CellMeasurer>
    );
  };

  return (
    <AutoSizer>
      {({ height, width }) => {
        const calculatedWidth = width - props.decreaseWidth;
        const columnWidth =
          picturesPerRow > length
            ? calculatedWidth / length
            : calculatedWidth / picturesPerRow;
        return (
          <Grid
            cellRenderer={cellRenderer}
            columnCount={picturesPerRow > length ? length : picturesPerRow}
            columnWidth={columnWidth}
            height={height}
            rowCount={rowCount}
            rowHeight={150}
            width={calculatedWidth}
            style={{ outline: 'none' }}
          />
        );
      }}
    </AutoSizer>
  );
};

export default Items;
