import React, { Component } from 'react';
import {
  Checkbox,
  Grid,
  Input,
  ListItem,
  ListItemSecondaryAction
} from 'material-ui';
import Avatar from 'material-ui/Avatar';
import './Category.css';
import { DropTarget } from 'react-dnd';

const spec = {
  drop(props, monitor, component) {
    const item = monitor.getItem();

    if (component.state.pathname.length === 0) {
      component.setState({
        pathname: item.pathname
      });
    }

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
      name: this.props.name,
      pathname: this.props.pathname
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
            <Grid item xs={3}>
              <Avatar
                src={this.state.pathname}
                style={{ border: '5px solid ' + this.props.color }}
                className="class-avatar"
              />
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
