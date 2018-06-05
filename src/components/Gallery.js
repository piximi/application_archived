import { Button, Divider, Grid } from 'material-ui';
import React from 'react';
import ConnectedImages from '../containers/ConnectedImages';
import styles from './Gallery.css';
import { withStyles } from 'material-ui/styles/index';
import ConnectedUploadButton from '../containers/ConnectedUploadButton';

const Gallery = props => {
  const {
    classes,
    findCategory,
    updateImageCategory,
    updateSettingColumns,
    settings,
    sortImages
  } = props;
  return (
    <Grid item xs={10}>
      <div className={classes.toolbar} />

      <Divider />

      <main className={classes.content}>
        <ConnectedUploadButton />

        <Button onClick={() => sortImages()} variant="raised">
          {' '}
          SORT{' '}
        </Button>

        <div
          style={{ position: 'fixed', right: '10%', zIndex: 1 }}
          className="slidecontainer"
        >
          <input
            onChange={e => updateSettingColumns(e)}
            type="range"
            min="1"
            max="100"
            value={settings.columns}
          />
        </div>

        <ConnectedImages
          columns={settings.columns}
          findCategory={findCategory}
          updateImageCategory={updateImageCategory}
        />
      </main>
    </Grid>
  );
};

export default withStyles(styles, { withTheme: true })(Gallery);
