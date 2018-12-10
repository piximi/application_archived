import React, { Component } from 'react';
import styles from './OpenDialog.css';
import { withStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CIFAR10 from './CIFAR-10.png';
import CIFAR100 from './CIFAR-100.png';
import MNIST from './MNIST.png';

class OpenDialog extends Component {
  render() {
    const { classes, open } = this.props;

    return (
      <Dialog fullWidth={true} maxWidth="sm" open={open}>
        <DialogContent classes={{ root: classes.dialogContent }}>
          <List>
            <ListItem button>
              <ListItemAvatar>
                <Avatar src={CIFAR10}>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="CIFAR-10"
                secondary="The CIFAR-10 dataset contains 60,000 32×32 color photographs in 10 different categories. There are 6,000 images of each category. The categories are completely mutually exclusive."
              />
            </ListItem>

            <ListItem button>
              <ListItemAvatar>
                <Avatar src={CIFAR100}>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="CIFAR-100"
                secondary="The CIFAR-100 dataset consists of 60,000 32 × 32 color photographs in 100 classes."
              />
            </ListItem>

            <ListItem button>
              <ListItemAvatar>
                <Avatar src={MNIST}>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="MNIST"
                secondary="The MNIST dataset consists of 60,000 18 × 18 handwritten digits in 10 classes."
              />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions />
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(OpenDialog);
