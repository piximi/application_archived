import React from 'react';
import styles from './CreateCategoryDialog.css';
import { withStyles } from 'material-ui/styles/index';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  Grid,
  Input,
  InputLabel
} from 'material-ui';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const CreateCategoryDialog = ({ createCategory, classes, onClose, open }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Grid container spacing={24} alignItems="flex-end">
          <Grid item>
            <AccountCircleIcon />
          </Grid>

          <Grid item>
            <FormControl>
              <InputLabel htmlFor="name-simple">Category</InputLabel>

              <Input id="name-simple" value=" " />
            </FormControl>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>

        <Button onClick={createCategory} color="primary">
          Create category
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(CreateCategoryDialog);
