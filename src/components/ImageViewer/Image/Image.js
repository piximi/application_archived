import React, { Component } from 'react';
import styles from './Image.css';
import { withStyles } from '@material-ui/core/styles';

class Image extends Component {
  render() {
    const { classes, src } = this.props;

    return <img alt="example" className={classes.image} src={src} />;
  }
}

export default withStyles(styles, { withTheme: true })(Image);
