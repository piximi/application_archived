import * as React from 'react';
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
import CIFAR10 from './CIFAR-10.png';
// @ts-ignore
import CIFAR100 from './CIFAR-100.png';
// @ts-ignore
import MNIST from './MNIST.png';

const useStyles = makeStyles(styles);

const OpenExampleClassifierDialog = (props: any) => {
  const classes = useStyles({});

  const { t: translation } = useTranslation();

  const { openClassifier, open, onClose } = props;

  const openExampleClassifier = (name: string) => {
    console.log(name);

    openClassifier(name);
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
            src={CIFAR10}
            primary="UC Merced Land Use Dataset"
            secondary="The UC Merced Land Use Dataset contains 2,100 256 × 256 3-channel satellite images. Images are classified into one of 21 possible categories."
            onClick={() => {
              onClose();
              openExampleClassifier('uc-merced-land-use-dataset');
            }}
          />

          <OpenExampleClassifierListItem
            src={CIFAR10}
            primary="CIFAR-10"
            secondary="The CIFAR-10 dataset contains 10,000 32×32 color photographs in 10 different categories."
            onClick={() => {
              onClose();
              openExampleClassifier('cifar10');
            }}
          />

          <OpenExampleClassifierListItem
            src={CIFAR100}
            primary="CIFAR-100"
            secondary="The CIFAR-100 dataset consists of 10,000 32 × 32 color photographs in 100 classes."
            onClick={() => {
              onClose();
              openExampleClassifier('cifar100');
            }}
          />

          <OpenExampleClassifierListItem
            src={MNIST}
            primary="MNIST"
            secondary="The MNIST dataset consists of 10,000 28 × 28 handwritten digits in 10 classes."
            onClick={() => {
              onClose();
              openExampleClassifier('mnist');
            }}
          />
        </List>
      </DialogContent>
      <DialogActions />
    </Dialog>
  );
};

export default OpenExampleClassifierDialog;
