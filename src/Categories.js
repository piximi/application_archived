import React, { Component } from 'react';
import { Button, List } from 'material-ui';
import Category from './Category';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

class Categories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <List component="nav">
          <Category name="0" />
          <Category name="1" />
        </List>

        <Button
          aria-label="add"
          className={this.props.classes.fab}
          color="secondary"
          variant="fab"
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Categories);
