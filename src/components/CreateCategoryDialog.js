import React from 'react';
import styles from './CreateCategoryDialog.css';
import { withStyles } from 'material-ui/styles/index';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  Input,
  InputLabel,
  TextField
} from 'material-ui';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const CreateCategoryDialog = ({ classes, onClose, open }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Grid container spacing={24} alignItems="flex-end">
          <Grid item>
            <AccountCircleIcon />
          </Grid>

          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="name-simple">Description</InputLabel>

              <Input id="name-simple" value="Description" />
            </FormControl>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>

        <Button onClick={onClose} color="primary">
          Create category
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(CreateCategoryDialog);
