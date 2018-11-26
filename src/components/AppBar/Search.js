import React, { PureComponent } from 'react';
import styles from './Search.css';
import { withStyles } from '@material-ui/core/styles';
import { FormControl, Input, InputAdornment } from '@material-ui/core';
import classNames from 'classnames';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

class Search extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <FormControl className={classNames(classes.formControl)}>
        <Input
          className={classNames(classes.input)}
          disableUnderline
          id="input-with-icon-adornment"
          placeholder="Search your images"
          startAdornment={
            <InputAdornment position="start">
              <ImageSearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Search);
