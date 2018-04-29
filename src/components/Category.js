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
import { DropTarget } from 'react-dnd';
import styles from './Classifier.css';
import { withStyles } from 'material-ui/styles/index';

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
    const {
      categoryOnChange,
      color,
      connectDropTarget,
      identifier,
      visible
    } = this.props;

    return connectDropTarget(
      <div>
        <Grid container spacing={0}>
          <ListItem button>
            <Grid item xs={2}>
              <ListItemIcon>
                <LabelIcon style={{ color: color }} />
              </ListItemIcon>
            </Grid>

            <Grid item xs={8}>
              <Input
                className={styles.name}
                onChange={this.onInputChange}
                value={this.state.name}
              />
            </Grid>

            <Grid item xs={2}>
              <ListItemSecondaryAction>
                <Checkbox
                  checked={visible}
                  onChange={event => categoryOnChange(event, identifier)}
                />
              </ListItemSecondaryAction>
            </Grid>
          </ListItem>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(DropTarget('Image', spec, collect)(Category));
