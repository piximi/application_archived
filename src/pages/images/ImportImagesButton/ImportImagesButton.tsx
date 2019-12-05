import * as React from 'react';
import styles from './ImportImagesButton.css';
import Button from '@material-ui/core/Button';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import { ConnectedUploadImageDialog } from '@piximi/upload-image-dialog';
import { useDialog } from '@piximi/hooks';

const useStyles = makeStyles(styles);

export const ImportImagesButton = (props: any) => {
  const classes = useStyles({});

  const { openedDialog, closeDialog, openDialog } = useDialog();

  const { t: translation } = useTranslation();

  return (
    <>
      <Button className={classes.button} onClick={openDialog}>
        <AddPhotoAlternateIcon className={classes.icon} />

        {translation('Import images')}
      </Button>

      <ConnectedUploadImageDialog
        closeDialog={closeDialog}
        openedDialog={openedDialog}
      />
    </>
  );
};
