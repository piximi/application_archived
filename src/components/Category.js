import React, { Component } from 'react';
import {
  Checkbox,
  Grid,
  Input,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction
} from 'material-ui';
import LabelIcon from '@material-ui/icons/Label';
import './Category.css';
import { DropTarget } from 'react-dnd';

const spec = {
  drop(props, monitor, component) {
    return {
      categoryIdentifier: component.props.identifier,
      color: component.props.color
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true,
      name: this.props.name
    };
  }

  onCheckboxChange = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  onInputChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div>
        <Grid container spacing={0}>
          <ListItem button>
            <Grid item xs={2}>
              <ListItemIcon>
                <LabelIcon style={{ color: this.props.color }} />
              </ListItemIcon>
            </Grid>

            <Grid item xs={8}>
              <Input
                className="name"
                onChange={this.onInputChange}
                value={this.state.name}
              />
            </Grid>

            <Grid item xs={2}>
              <ListItemSecondaryAction>
                <Checkbox
                  checked={this.state.checked}
                  onChange={this.onCheckboxChange}
                />
              </ListItemSecondaryAction>
            </Grid>
          </ListItem>
        </Grid>
      </div>
    );
  }
}

export default DropTarget('Image', spec, collect)(Category);
