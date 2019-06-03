import { createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    card: {
      display: 'flex'
    },
    cardContent: {
      flex: '1 0 auto'
    },
    cardMedia: {
      height: 128,
      width: 128
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      width: 200
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    }
  });

export default styles;
