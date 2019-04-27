import { createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const drawerWidth = 280;

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      boxShadow: 'none',
      position: 'absolute',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    appBarShiftLeft: {
      marginLeft: drawerWidth
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20
    },
    hide: {
      display: 'none'
    }
  });

export default styles;
