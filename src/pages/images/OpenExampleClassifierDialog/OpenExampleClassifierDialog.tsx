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

// @ts-ignore
import CIFAR10 from './CIFAR-10.png';

// @ts-ignore
import CIFAR100 from './CIFAR-100.png';

// @ts-ignore
import MNIST from './MNIST.png';
import OpenExampleClassifierListItem from '../OpenExampleClassifierListItem/OpenExampleClassifierListItem';

const useStyles = makeStyles(styles);

const OpenExampleClassifierDialog = (props: any) => {
  const classes = useStyles();

  const { t: translation } = useTranslation();

  const { open, onClose, loadDemoProject } = props;

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
            primary="CIFAR-10"
            secondary="The CIFAR-10 dataset contains 10,000 32×32 color photographs in 10 different categories."
            onClick={() => {
              onClose();
              loadDemoProject('cifar10');
            }}
          />

          <OpenExampleClassifierListItem
            src={CIFAR100}
            primary="CIFAR-100"
            secondary="The CIFAR-100 dataset consists of 10,000 32 × 32 color photographs in 100 classes."
            onClick={() => {
              onClose();
              loadDemoProject('cifar100');
            }}
          />

          <OpenExampleClassifierListItem
            src={MNIST}
            primary="MNIST"
            secondary="The MNIST dataset consists of 10,000 28 × 28 handwritten digits in 10 classes."
            onClick={() => {
              onClose();
              loadDemoProject('mnist');
            }}
          />
        </List>
      </DialogContent>
      <DialogActions />
    </Dialog>
  );
};

export default OpenExampleClassifierDialog;
