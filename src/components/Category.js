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

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: null,
      checked: true,
      name: this.props.name
    };

    this.onCheckboxChange = this.onCheckboxChange.bind(this);

    this.onInputChange = this.onInputChange.bind(this);
  }

  onCheckboxChange() {
    this.setState({
      checked: !this.state.checked
    });
  }

  onInputChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <Grid container spacing={0}>
        <ListItem button>
          <Grid item xs={2}>
            <ListItemIcon>
              <LabelIcon />
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
    );
  }
}

export default Category;
