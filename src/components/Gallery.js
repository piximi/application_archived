import { Divider, Grid, Toolbar } from 'material-ui';
import React from 'react';
import Images from './Images';
import styles from './Gallery.css';
import { withStyles } from 'material-ui/styles/index';

const Gallery = props => {
  const {
    classes,
    findCategory,
    updateImageCategory,
    images,
    settings,
    onColumnsChange
  } = props;

  return (
    <Grid item xs={9}>
      <div className={classes.toolbar} />

      <Toolbar className={classes.primaryToolbar}>
        <Grid container spacing={0}>
          <Grid item xs={10} />

          <Grid item xs={2}>
            <input
              type="range"
              min="2"
              max="24"
              step="1"
              value={settings.columns}
              onChange={onColumnsChange}
              style={{ width: '100%' }}
            />
          </Grid>
        </Grid>
      </Toolbar>

      <Divider />

      <main className={classes.content}>
        <Images
          columns={settings.columns}
          findCategory={findCategory}
          images={images}
          updateImageCategory={updateImageCategory}
        />
      </main>
    </Grid>
  );
};

export default withStyles(styles)(Gallery);
