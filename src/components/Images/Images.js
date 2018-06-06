import React, { Component } from 'react';
import { HotKeys } from 'react-hotkeys';
import { GridList, GridListTile } from 'material-ui';
import ConnectedImage from '../../containers/ConnectedImage';
import withDragDropContext from '../DragDropContext/DragDropContext';
import styles from './Images.css';
import { withStyles } from 'material-ui/styles/index';

class Images extends Component {
  constructor(props) {
    super(props);
    this._nodes = new Map();
    this._handleClick = this.handleClick.bind(this);
    this.inFocus = null;
    this.NoPicPerRow = null;
    this.myMap = {};
    this.reverseMap = {};
  }

  // TODO check how many pictures per row are displayed without nasty calculation
  handleClick(e, i) {
    const node = this._nodes.get(i);
    if (node == null) {
      return null;
    }
    node.focus();
    this.inFocus = Number(
      document.activeElement.firstChild.getAttribute('index')
    );
  }

  // Returns number of pictures displayed per row
  calcPicsPerRow() {
    for (let node of this._nodes) {
      const tileWidth = node[1].offsetWidth;
      const containerWidth = document.getElementById('foo').offsetWidth;
      let imgPerRow = containerWidth / tileWidth;
      const padding = imgPerRow * 5;
      imgPerRow = Math.floor((containerWidth - padding) / tileWidth);
      return imgPerRow;
    }
    return 0;
  }

  keyMap = {
    moveRight: 'right',
    moveLeft: 'left',
    moveUp: 'up',
    moveDown: 'down',
    classify: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace']
  };

  handlers = {
    moveRight: event => {
      let index = this.reverseMap[this.myMap[this.inFocus] + 1];
      this.handleClick(event, index);
    },
    moveLeft: event => {
      let index = this.reverseMap[this.myMap[this.inFocus] - 1];
      this.handleClick(event, index);
    },
    moveUp: event => {
      let index = this.reverseMap[
        this.myMap[this.inFocus] - this.calcPicsPerRow()
      ];
      this.handleClick(event, index);
    },
    moveDown: event => {
      let index = this.reverseMap[
        this.myMap[this.inFocus] + this.calcPicsPerRow()
      ];
      this.handleClick(event, index);
    },
    classify: event => {
      if (this.props.images[this.inFocus] == null) {
        return null;
      }
      const identifier = this.props.images[this.inFocus].identifier;
      if (event.key === 'Backspace') {
        let newCategory = null;
        this.props.updateImageCategory(identifier, newCategory);
        return null;
      }
      const index = Number(event.key) === 0 ? 9 : Number(event.key) - 1;
      if (index > this.props.categories.length - 1) {
        return null;
      }
      const category = this.props.categories[index].identifier;
      this.props.updateImageCategory(identifier, category);
    }
  };

  render() {
    let counter = -1;
    let filteredImages = this.props.images.map((sample, index) => {
      if (sample.visible) {
        counter = counter + 1;
        this.myMap[index] = counter;
        this.reverseMap[counter] = index;

        return (
          <HotKeys
            key={'hotkey' + index}
            keyMap={this.keyMap}
            handlers={this.handlers}
            tabIndex=""
          >
            <div
              className={styles.focus}
              tabIndex="-1"
              ref={c => this._nodes.set(index, c)}
              index={index}
              onClick={e => this.handleClick(e, index)}
            >
              <GridListTile key={index} index={index} cols={1}>
                <ConnectedImage
                  category={sample.category}
                  identifier={sample.identifier}
                  findCategory={this.props.findCategory}
                  pathname={this.props.imageByteStrings[sample.identifier]}
                  probability={sample.probability}
                />
              </GridListTile>
            </div>
          </HotKeys>
        );
      } else {
        return null;
      }
    });
    return (
      <GridList
        id="foo"
        cellHeight={'auto'}
        cols={Number(this.props.columns)}
        spacing={5}
      >
        {filteredImages}
      </GridList>
    );
  }
}

export default withDragDropContext(
  withStyles(styles, { withTheme: true })(Images)
);
