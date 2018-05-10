import { AppBar, Button, Toolbar, Typography } from 'material-ui';
import React from 'react';
import styles from './Primary.css';
import { withStyles } from 'material-ui/styles/index';
import Download from '@axetroy/react-download';

const Primary = ({ classes, train, open, save, content }) => {
  return (
    <AppBar position="fixed" className={classes.appBar} color="default">
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          Cyto
        </Typography>

        <input onChange={open} type="file" />

        <Download file="example.cyto" content={JSON.stringify(content)}>
          <Button onClick={save}>Save</Button>
        </Download>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Primary);
