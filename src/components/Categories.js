import React, { Component } from 'react';
import { Button, List, ListSubheader } from 'material-ui';
import Category from './Category';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  create: {
    bottom: theme.spacing.unit * 2,
    position: 'absolute',
    right: theme.spacing.unit * 2
  }
});

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          name: ''
        }
      ]
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const category = {
      name: ''
    };

    this.setState(previousState => ({
      categories: [...previousState.categories, category]
    }));
  }

  render() {
    return (
      <div>
        <List subheader={<ListSubheader>Categories</ListSubheader>}>
          {this.state.categories.map((category, index) => (
            <Category key={index} name={category.name} />
          ))}
        </List>

        <Button
          className={this.props.classes.create}
          onClick={this.onClick}
          variant="fab"
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Categories);
