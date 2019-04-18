import * as React from 'react';
import styles from './OpenExampleClassifierDialog.css';
import {
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CIFAR10 from './CIFAR-10.png';
import CIFAR100 from './CIFAR-100.png';
import MNIST from './MNIST.png';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(styles);

const OpenExampleClassifierDialog = props => {
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
          <ListItem
            button
            onClick={() => {
              onClose();
              loadDemoProject('cifar10');
            }}
          >
            <ListItemAvatar>
              <Avatar src={CIFAR10}>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="CIFAR-10"
              secondary="The CIFAR-10 dataset contains 10,000 32×32 color photographs in 10 different categories."
            />
          </ListItem>

          <ListItem
            button
            onClick={() => {
              onClose();
              loadDemoProject('cifar10');
            }}
          >
            <ListItemAvatar>
              <Avatar src={CIFAR100}>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="CIFAR-100"
              secondary="The CIFAR-100 dataset consists of 10,000 32 × 32 color photographs in 100 classes."
            />
          </ListItem>

          <ListItem
            button
            onClick={() => {
              onClose();
              loadDemoProject('mnist');
            }}
          >
            <ListItemAvatar>
              <Avatar src={MNIST}>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="MNIST"
              secondary="The MNIST dataset consists of 10,000 28 × 28 handwritten digits in 10 classes."
            />
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions />
    </Dialog>
  );
};

export default OpenExampleClassifierDialog;
