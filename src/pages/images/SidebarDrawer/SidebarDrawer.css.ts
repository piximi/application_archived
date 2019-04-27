import { createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const drawerWidth = 280;

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      boxShadow: 'none',
      left: 0,
      width: 'inherit'
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar
    },
    flex: {
      flex: 1
    },
    drawerPaper: {
      position: 'fixed',
      width: drawerWidth,
      boxShadow:
        '0 16px 24px 2px rgba(0,0,0,0.14),0 6px 30px 5px rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.2)'
    },
    toolbar: theme.mixins.toolbar
  });

export default styles;
