import { createStyles } from '@material-ui/styles';

const styles = () =>
  createStyles({
    avatarRoot: {
      background: 'rgba(0,0,0,0.26)'
    },
    dialogPaper: {
      borderRadius: '10px'
    },
    dialogTitle: {
      fontWeight: 500
    },
    content: {
      paddingLeft: '12px'
    },
    root: {
      padding: '2px 4px 2px 0',
      display: 'flex',
      alignItems: 'center'
    },
    input: {
      marginLeft: 8,
      flex: 1
    },
    iconButton: {
      padding: 4
    },
    divider: {
      width: 1,
      height: 28,
      margin: 4
    },
    colorPicker: {
      height: '100%',
      padding: '12px'
    }
  });

export default styles;
