import React, { Component } from 'react';
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from 'material-ui';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from 'material-ui/styles';
import withDragDropContext from '../DragDropContext/DragDropContext';
import styles from './Categories.css';
import ConnectedCategory from '../../containers/ConnectedCategory';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ConnectedCreateCategoryDialog from '../../containers/ConnectedCreateCategoryDialog';

class Categories extends Component {
  state = {
    collapsed: false,
    createCategoryDialogToggled: false
  };

  toggleCreateCategoryDialog = () => {
    this.setState({
      ...this.state,
      createCategoryDialogToggled: !this.state.createCategoryDialogToggled
    });
  };

  collapse = () => {
    this.setState({
      ...this.state,
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { categories } = this.props;

    return (
      <React.Fragment>
        <List dense>
          <ListItem button onClick={this.collapse}>
            <ListItemIcon>
              {!this.state.collapsed ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemIcon>

            <ListItemText inset primary="Categories" />
          </ListItem>

          <Collapse in={!this.state.collapsed} timeout="auto" unmountOnExit>
            {categories.map(category => (
              <ConnectedCategory
                key={category.identifier}
                identifier={category.identifier}
                categories={categories}
              />
            ))}

            <ListItem button onClick={this.toggleCreateCategoryDialog}>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>

              <ListItemText inset primary="Create category" />
            </ListItem>
          </Collapse>
        </List>

        <ConnectedCreateCategoryDialog
          onClose={this.toggleCreateCategoryDialog}
          open={this.state.createCategoryDialogToggled}
        />
      </React.Fragment>
    );
  }
}

export default withDragDropContext(
  withStyles(styles, { withTheme: true })(Categories)
);
