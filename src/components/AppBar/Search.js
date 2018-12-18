import React, { PureComponent } from 'react';
import styles from './Search.css';
import { withStyles } from '@material-ui/core/styles';
import { FormControl, Input, InputAdornment } from '@material-ui/core';
import classNames from 'classnames';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

class Search extends PureComponent {
  filterImages = searchText => {
    let images = { ...this.props.images };
    for (let key in images) {
      const pathname = images[key].pathname;
      if (pathname) {
        const match = this.compare(
          pathname.toLowerCase(),
          searchText.toLowerCase()
        );
        if (match) {
          images[key].visible = true;
        } else {
          images[key].visible = false;
        }
      }
    }
    this.props.updateImageVisibility(images);
  };

  compare(a, b) {
    if (a.includes(b)) return true;
    else return false;
  }

  render() {
    const { classes } = this.props;
    return (
      <FormControl className={classNames(classes.formControl)}>
        <Input
          onChange={e => this.filterImages(e.target.value)}
          className={classNames(classes.input)}
          disableUnderline
          id="input-with-icon-adornment"
          placeholder="Search images by filename"
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
