import * as React from 'react';
import axios from 'axios';
import styles from './OpenExampleClassifierDialog.css';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  Typography
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import { OpenExampleClassifierListItem } from '..';
// @ts-ignore
import WORMS from './worms.png';
// @ts-ignore
import MNIST from './MNIST.png';

const useStyles = makeStyles(styles);

const OpenExampleClassifierDialog = (props: any) => {
  const classes = useStyles({});

  const { t: translation } = useTranslation();

  const { openClassifier, open, onClose } = props;

  const openExampleClassifier = (name: string) => {
    onClose();

    const url = `https://storage.piximi.app/examples/${name}/${name}.piximi`;

    return axios
      .get(url)
      .then(result => {
        openClassifier(result.data.categories, result.data.images, name);
      })
      .catch(function(error) {
        alert(error);
      });
  };

  const openGitHubExampleClassifier = (name: string) => {
    onClose();

    return axios
      .get(
        'https://raw.githubusercontent.com/piximi/application/master/src/demos/' +
          name +
          '.piximi'
      )
      .then(result => {
        openClassifier(result.data.categories, result.data.images, name);
      })
      .catch(function(error) {
        alert(error);
      });
  };

  return (
    <Dialog fullWidth maxWidth="sm" open={open}>
      <DialogTitle disableTypography className={classes.dialogTitle}>
        <Typography variant="h6">
          {translation('Open example classifier')}
        </Typography>

        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent classes={{ root: classes.dialogContent }}>
        <List>
          <OpenExampleClassifierListItem
            src={MNIST}
            primary="MNIST"
            secondary="worms"
            onClick={() => {
              onClose();
              openExampleClassifier('mnist');
            }}
          />

          <OpenExampleClassifierListItem
            src={WORMS}
            primary="worms"
            secondary="worms"
            onClick={() => {
              onClose();
              openGitHubExampleClassifier('worms');
            }}
          />
        </List>
      </DialogContent>
      <DialogActions />
    </Dialog>
  );
};

export default OpenExampleClassifierDialog;
