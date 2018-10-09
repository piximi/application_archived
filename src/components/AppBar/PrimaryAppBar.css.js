const drawerWidth = 240;

const styles = theme => ({
  appBar: {
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
    // display: 'flex',
    // justifyContent: 'space-between'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  appBarLeft: {
    width: drawerWidth
  },
  appBarCenter: {
    flexGrow: 1
  },
  appBarRight: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  zoomToolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: 200,
    '&:hover': {
      cursor: 'pointer'
    },
    '&>div': {
      // float: 'right',
      // alignItems: 'center'
    },
    border: '2px solid black'
  }
  // zoomSlider: {
  //   objectFit: 'contain',
  //   flexGrow: 1,
  //   '&>*' :{
  //     boxSizing: 'border-box',
  //     width:'auto',
  //     maxHeight:'100%',
  //   },
  //   border: '2px dotted red',
  //   // float: 'left',
  //   width: '60%'
  // },
  // zoomReset: {
  //   flexGrow: 1,
  //   '&>*' :{
  //     alignItems: 'center',
  //     maxWidth:'100%',
  //     maxHeight:'100%',
  //   },
  //   width: '20%',
  //   border: '2px dotted blue',
  //   // float: 'left',
  // }
});

export default styles;
