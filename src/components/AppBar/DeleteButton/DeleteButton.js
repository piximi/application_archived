import React, { useState } from 'react';
import styles from './DeleteButton.css';
import { IconButton, Tooltip } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import ConnectedDeleteImageDialog from '../../../containers/ConnectedDeleteImageDialog';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

export default function DeleteButton(props) {
  const [open, setOpen] = useState(0);

  const classes = useStyles();

  const { selectedImages, setSelectedImages } = props;

  return (
    <React.Fragment>
      <Tooltip title="Delete">
        <IconButton
          aria-label="Delete"
          classes={{ root: classes.button }}
          onClick={() => setOpen(!open)}
        >
          <Delete classes={{ root: classes.icon }} />
        </IconButton>
      </Tooltip>

      <ConnectedDeleteImageDialog
        setSelectedImages={setSelectedImages}
        selectedImages={selectedImages}
        onClose={() => setOpen(!open)}
        open={open}
      />
    </React.Fragment>
  );
}
