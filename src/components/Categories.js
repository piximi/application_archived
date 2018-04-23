import React, { Component } from 'react';
import { Button, List, ListSubheader } from 'material-ui';
import Category from './Category';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from 'material-ui/styles';
import uuidv4 from 'uuid';

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
        { color: '', identifier: uuidv4(), name: '0' },
        { color: '', identifier: uuidv4(), name: '1' },
        { color: '', identifier: uuidv4(), name: '2' },
        { color: '', identifier: uuidv4(), name: '3' },
        { color: '', identifier: uuidv4(), name: '4' },
        { color: '', identifier: uuidv4(), name: '5' },
        { color: '', identifier: uuidv4(), name: '6' },
        { color: '', identifier: uuidv4(), name: '7' },
        { color: '', identifier: uuidv4(), name: '8' },
        { color: '', identifier: uuidv4(), name: '9' }
      ]
    };
  }

  onClick = () => {
    const category = {
      color: '',
      identifier: uuidv4(),
      name: ''
    };

    this.setState(previousState => ({
      categories: [...previousState.categories, category]
    }));
  };

  render() {
    return (
      <React.Fragment>
        <List subheader={<ListSubheader>Categories</ListSubheader>}>
          {this.state.categories.map(category => (
            <Category
              key={category.identifier}
              identifier={category.identifier}
              color={category.color}
              name={category.name}
            />
          ))}
        </List>

        <Button
          className={this.props.classes.create}
          onClick={this.onClick}
          variant="fab"
        >
          <AddIcon />
        </Button>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Categories);
