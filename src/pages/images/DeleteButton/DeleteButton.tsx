import * as React from 'react';
import styles from './DeleteButton.css';
import { IconButton, Tooltip } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import { ConnectedDeleteImageDialog } from '../../../containers';
import { makeStyles } from '@material-ui/styles';
import { useDialog } from '@piximi/hooks';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(styles);

export const DeleteButton = (props: any) => {
  const { t: translation } = useTranslation();

  const { openedDialog, openDialog, closeDialog } = useDialog();

  const classes = useStyles({});

  const { selectedImages, setSelectedImages } = props;

  return (
    <React.Fragment>
      <Tooltip title={translation('Delete images')}>
        <IconButton
          aria-label={translation('Delete images')}
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
