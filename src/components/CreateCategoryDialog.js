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
import AddIcon from '@material-ui/icons/Add';

const CreateCategoryDialog = ({
  toggleCreateCategoryColorMenu,
  createCategory,
  classes,
  onClose,
  open
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Grid container spacing={24} alignItems="flex-end">
          <Grid item>
            <Button
              variant="fab"
              mini
              color="secondary"
              aria-label="add"
              onClick={toggleCreateCategoryColorMenu}
            >
              <AddIcon />
            </Button>
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

        <Button onClick={onClose} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(CreateCategoryDialog);
