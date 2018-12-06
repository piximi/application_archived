import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { DropTarget } from 'react-dnd';
import { Button } from '@material-ui/core';

const dropTargetStyle = {
  visibility: 'hidden',
  opacity: 0
  // transition: 'visibility 0.5s, opacity 0.5s'
};

const dropTargetVisibleStyle = {
  border: '2px solid blue',
  position: 'absolute',
  bottom: 50,
  transform: 'translateY(-50%)',
  zIndex: 8000,
  width: '65%',
  visibility: 'visible',
  opacity: 1,
  transition: 'visibility 1s, opacity 1s',
  display: 'flex',
  borderRadius: '20px',
  justifyContent: 'center'
};

const dropTargetVisibleHoverStyle = {
  border: '2px solid red',
  backgroundColor: 'rgba(200,50,0,0.7)',
  position: 'absolute',
  bottom: 50,
  transform: 'translateY(-50%)',
  zIndex: 8000,
  width: '65%',
  visibility: 'visible',
  opacity: 1,
  transition: 'visibility 1s, opacity 1s',
  display: 'flex',
  borderRadius: '20px',
  justifyContent: 'center'
};

const spec = {
  drop(props, monitor, component) {
    const selectedItems = monitor.getItem().selectedItems;
    const categoryIdentifer = props.identifier;
    return {
      categoryIdentifier: categoryIdentifer,
      categoryName: props.description,
      color: props.color,
      selectedItems: selectedItems
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class DeleteDropLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOver: false
    };
  }

  render() {
    const { draggedItem, connectDropTarget } = this.props;

    return connectDropTarget(
      <div
        id="delete-drop-target"
        style={
          draggedItem === null
            ? dropTargetStyle
            : this.props.isOver
              ? dropTargetVisibleHoverStyle
              : dropTargetVisibleStyle
        }
      >
        <Button>
          <DeleteIcon />
        </Button>
      </div>
    );
  }
}

export default DropTarget('SelectedItems', spec, collect)(DeleteDropLayer);
