const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    backgroundColor: 'transparent',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    boxShadow: 'none',
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
  toolBar: {
    justifyContent: 'space-between'
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },

  slider: {
    root: {
      width: 10
    },
    slider: {
      padding: '22px 0px'
    }
  }
});

export default styles;
