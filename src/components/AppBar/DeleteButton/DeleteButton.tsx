import * as React from 'react';
import styles from './DeleteButton.css';
import { IconButton, Tooltip } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import ConnectedDeleteImageDialog from '../../../containers/ConnectedDeleteImageDialog';
import { makeStyles } from '@material-ui/styles';
import useDialog from '../../../hooks/Dialog';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(styles);

const DeleteButton = (props: any) => {
  const { t, i18n } = useTranslation();

  const { openedDialog, openDialog, closeDialog } = useDialog();

  const classes = useStyles();

  const { selectedImages, setSelectedImages } = props;

  return (
    <React.Fragment>
      <Tooltip title={t('Delete images')}>
        <IconButton
          aria-label={t('Delete images')}
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

export default DeleteButton;
