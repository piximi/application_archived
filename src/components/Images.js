import React, { Component } from 'react';
import { HotKeys } from 'react-hotkeys';
import { GridList, GridListTile } from 'material-ui';
import ConnectedImage from '../containers/ConnectedImage';
import withDragDropContext from './dnd-global-context';

class Images extends Component {
  constructor(props) {
    super(props);
    this._nodes = new Map();
    this._handleClick = this.handleClick.bind(this);
    this.inFocus = null;
    this.NoPicPerRow = null;
  }

  // TODO check how many pictures per row are displayed without nasty calculation
  handleClick(e, i) {
    if (i >= this.props.images.length || i < 0) {
      return null;
    }
    const node = this._nodes.get(i);
    node.focus();
    this.inFocus = Number(
      document.activeElement.firstChild.getAttribute('index')
    );
  }

  // Returns number of pictures displayed per row
  calcPicsPerRow() {
    let imgPerRow =
      document.getElementById('foo').offsetWidth /
      document.getElementById('1Tile').offsetWidth;
    imgPerRow = imgPerRow * 2;
    imgPerRow = Math.floor(
      (document.getElementById('foo').offsetWidth - imgPerRow) /
        document.getElementById('1Tile').offsetWidth
    );
    return imgPerRow;
  }

  keyMap = {
    moveRight: 'right',
    moveLeft: 'left',
    moveUp: 'up',
    moveDown: 'down',
    classify: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  };

  handlers = {
    moveRight: event => {
      this.handleClick(event, this.inFocus + 1);
    },
    moveLeft: event => {
      this.handleClick(event, this.inFocus - 1);
    },
    moveUp: event => {
      this.handleClick(event, this.inFocus - this.calcPicsPerRow());
    },
    moveDown: event => {
      this.handleClick(event, this.inFocus + this.calcPicsPerRow());
    },
    classify: event => {
      const identifier = this.props.images[this.inFocus].identifier;
      const newKey = Number(event.key) === 0 ? 10 : Number(event.key) - 1;
      if (newKey > this.props.categories.length - 1) {
        return null;
      }
      const category = this.props.categories[newKey].identifier;
      this.props.updateImageCategory(identifier, category);
    }
  };

  render() {
    return (
      <GridList
        id="foo"
        cellHeight={'auto'}
        cols={Number(this.props.columns)}
        spacing={4}
      >
        {this.props.images.map((sample, index) => (
          <HotKeys
            key={'hotkey' + index}
            keyMap={this.keyMap}
            handlers={this.handlers}
          >
            <div
              tabIndex="-1"
              ref={c => this._nodes.set(index, c)}
              onClick={e => this.handleClick(e, index)}
            >
              <GridListTile
                key={index}
                index={index}
                id={index + 'Tile'}
                cols={1}
              >
                <ConnectedImage
                  category={sample.category}
                  identifier={sample.identifier}
                  findCategory={this.props.findCategory}
                  pathname={this.props.imageByteStrings[sample.identifier]}
                />
              </GridListTile>
            </div>
          </HotKeys>
        ))}
      </GridList>
    );
  }
}

export default withDragDropContext(Images);
