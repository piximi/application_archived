import { Divider, Grid } from 'material-ui';
import React from 'react';
import ConnectedImages from '../containers/ConnectedImages';
import styles from './Gallery.css';
import { withStyles } from 'material-ui/styles/index';

const Gallery = props => {
  const {
    classes,
    findCategory,
    updateImageCategory,
    images,
    imageByteStrings
  } = props;

  return (
    <Grid item xs={10}>
      <div className={classes.toolbar} />
      <Divider />

      <main className={classes.content}>
        <ConnectedImages
          columns={8}
          findCategory={findCategory}
          images={images}
          imageByteStrings={imageByteStrings}
          updateImageCategory={updateImageCategory}
        />
      </main>
    </Grid>
  );
};

export default withStyles(styles)(Gallery);
