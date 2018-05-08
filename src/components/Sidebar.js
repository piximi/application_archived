import { Divider, Drawer, Grid, Toolbar } from 'material-ui';
import React from 'react';
import styles from './Primary.css';
import { withStyles } from 'material-ui/styles/index';
import Categories from './Categories';
import ConnectedCategories from '../containers/ConnectedCategories';

const Sidebar = props => {
  const {
    categories,
    categoryOnChange,
    categoryOnNameChange,
    createCategory,
    classes
  } = props;

  return (
    <Grid item xs={3}>
      <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent">
        <div className={classes.toolbar} />

        <Toolbar />

        <Divider />

        <ConnectedCategories
          categories={categories}
          categoryOnChange={categoryOnChange}
          categoryOnNameChange={categoryOnNameChange}
          onClick={createCategory}
        />
      </Drawer>
    </Grid>
  );
};

export default withStyles(styles)(Sidebar);
