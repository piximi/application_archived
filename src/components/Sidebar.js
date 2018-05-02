import { Divider, Drawer, Grid, Toolbar } from 'material-ui';
import React, { Component } from 'react';
import styles from './Primary.css';
import { withStyles } from 'material-ui/styles/index';
import Categories from './Categories';

class Sidebar extends Component {
  render() {
    const {
      categories,
      categoryOnChange,
      categoryOnNameChange,
      createCategory,
      classes
    } = this.props;

    return (
      <Grid item xs={3}>
        <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent">
          <div className={classes.toolbar} />

          <Toolbar />

          <Divider />

          <Categories
            categories={categories}
            categoryOnChange={categoryOnChange}
            categoryOnNameChange={categoryOnNameChange}
            onClick={createCategory}
          />
        </Drawer>
      </Grid>
    );
  }
}

export default withStyles(styles)(Sidebar);
