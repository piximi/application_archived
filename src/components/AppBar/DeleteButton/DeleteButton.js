import React from 'react';
import styles from './DeleteButton.css';
import { IconButton, Tooltip } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import ConnectedDeleteImageDialog from '../../../containers/ConnectedDeleteImageDialog';
import { makeStyles } from '@material-ui/styles';
import useDialog from '../../../hooks/Dialog';

const useStyles = makeStyles(styles);

const DeleteButton = props => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  const classes = useStyles();

  const { selectedImages, setSelectedImages } = props;

  return (
    <React.Fragment>
      <Tooltip title="Delete">
        <IconButton
          aria-label="Delete"
          classes={{ root: classes.button }}
          onClick={openDialog}
        >
          <Delete classes={{ root: classes.icon }} />
        </IconButton>
      </Tooltip>

      <ConnectedDeleteImageDialog
        setSelectedImages={setSelectedImages}
        selectedImages={selectedImages}
        onClose={closeDialog}
        open={openedDialog}
      />
    </React.Fragment>
  );
};

export default React.memo(DeleteButton);
