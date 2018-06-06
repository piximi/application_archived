import { Button, Divider, Toolbar, Tooltip } from 'material-ui';
import React from 'react';
import ConnectedImages from '../containers/ConnectedImages';
import styles from './Gallery.css';
import { withStyles } from 'material-ui/styles/index';
import ConnectedUploadButton from '../containers/ConnectedUploadButton';
import AddIcon from '@material-ui/icons/Add';

const Gallery = props => {
  const {
    classes,
    findCategory,
    updateImageCategory,
    updateSettingColumns,
    settings,
    sortImages,
    toggleUploadDialog
  } = props;
  return (
    <div className={classes.content}>
      <div className={classes.toolbar} />

      {/*<Divider />*/}

      <main>
        {/*<Toolbar>*/}
        {/*<ConnectedUploadButton />*/}

        {/*<Button onClick={() => sortImages()} variant="raised">{' '}SORT{' '}</Button>*/}

        {/*<div style={{ position: 'fixed', right: '10%', zIndex: 1 }} className="slidecontainer">*/}
        {/*<input onChange={e => updateSettingColumns(e)} type="range" min="1" max="100" value={settings.columns}/>*/}
        {/*</div>*/}
        {/*</Toolbar>*/}

        <ConnectedImages
          columns={settings.columns}
          findCategory={findCategory}
          updateImageCategory={updateImageCategory}
        />

        <Tooltip id="tooltip-fab" title="Upload new image">
          <Button
            variant="fab"
            color="secondary"
            className={classes.fab}
            onClick={toggleUploadDialog}
          >
            <AddIcon />
          </Button>
        </Tooltip>
      </main>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Gallery);
