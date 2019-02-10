import React, { PureComponent } from 'react';
import Item from './Item';
import { Grid, AutoSizer } from 'react-virtualized';

class Items extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      picturesPerRow: 0,
      rows: 0,
      noImages: 0
    };
    this.cellRenderer = this.cellRenderer.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    let picturesPerRow = props.imagesPerRow;
    // Media queries
    if (props.windowWidth - props.decreaseWidth < 900) picturesPerRow = 5;
    if (props.windowWidth - props.decreaseWidth < 850) picturesPerRow = 4;
    if (props.windowWidth - props.decreaseWidth < 810) picturesPerRow = 3;
    if (props.windowWidth - props.decreaseWidth < 400) picturesPerRow = 1;

    const noImages = props.images.length;
    const quotient = Math.floor(noImages / picturesPerRow);
    const remainder = noImages % picturesPerRow;
    let rowCount = quotient;
    if (remainder !== 0) {
      rowCount = rowCount + 1;
    }
    picturesPerRow = picturesPerRow > noImages ? noImages : picturesPerRow;
    return {
      ...state,
      picturesPerRow: picturesPerRow,
      rows: rowCount,
      noImages: noImages,
      prevImages: props.images
    };
  }

  onmousedown = imgId => {
    this.props.selectItem(imgId);
  };

  cellRenderer({ columnIndex, key, rowIndex, style }) {
    let newStyle = { ...style };
    const index = this.state.picturesPerRow * rowIndex - 1 + columnIndex + 1;
    if (index > this.state.noImages - 1) {
      return;
    }
    return (
      <div key={key} style={newStyle}>
        <Item
          key={key}
          item={this.props.images[index]}
          containerStyle={style}
          selectedItems={this.props.selectedItems}
          onmousedown={this.onmousedown}
          ondrag={this.props.ondrag}
          asyncImgLoadingFunc={this.props.asyncImgLoadingFunc}
          callOnDragEnd={this.props.callOnDragEnd}
        />
      </div>
    );
  }

  render() {
    const { decreaseWidth } = this.props;
    const { picturesPerRow, noImages } = this.state;
    return (
      <AutoSizer>
        {({ height, width }) => {
          const calculatedWidth = width - decreaseWidth;
          const columnWidth = calculatedWidth / picturesPerRow;
          const columnCount =
            picturesPerRow > noImages ? noImages : picturesPerRow;
          return (
            <Grid
              cellRenderer={this.cellRenderer}
              columnCount={columnCount}
              columnWidth={columnWidth}
              height={height}
              rowCount={this.state.rows}
              rowHeight={150}
              width={calculatedWidth}
              style={{ outline: 'none' }}
            />
          );
        }}
      </AutoSizer>
    );
  }
}

export default Items;
