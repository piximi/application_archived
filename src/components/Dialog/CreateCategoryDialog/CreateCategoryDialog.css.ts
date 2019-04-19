import { createStyles } from '@material-ui/styles';

const styles = () =>
  createStyles({
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
      padding: 10
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
