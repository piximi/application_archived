import React, { Component } from 'react';
import { List } from 'material-ui';
import Category from './Category';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({
      description: event.target.value
    });
  }

  render() {
    return (
      <List component="nav">
        <Category name="0" />
        <Category name="1" />
      </List>
    );
  }
}

export default Categories;
