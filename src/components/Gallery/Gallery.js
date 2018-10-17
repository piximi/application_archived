import { Button, Tooltip } from 'material-ui';
import React from 'react';
import ConnectedImages from '../../containers/ConnectedImages';
import styles from './Gallery.css';
import { withStyles } from 'material-ui/styles/index';
import ConnectedUploadDialog from '../../containers/ConnectedUploadDialog';
import AddIcon from '@material-ui/icons/Add';

const Gallery = props => {
  const { classes, findCategory, settings, toggleUploadDialog } = props;

  return (
    <div className={classes.content}>
      <main>
        <ConnectedImages
          columns={settings.columns}
          findCategory={findCategory}
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

      <ConnectedUploadDialog
        onClose={toggleUploadDialog}
        open={settings.upload.toggled}
      />
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Gallery);
