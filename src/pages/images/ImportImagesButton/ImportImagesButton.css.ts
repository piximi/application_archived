import { createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    button: {
      textTransform: 'none',
      fontSize: '1rem',
      borderRadius: theme.spacing.unit,
      padding: theme.spacing.unit,
      fontWeight: 'inherit',
      letterSpacing: 'inherit'
    },
    icon: {
      paddingRight: theme.spacing.unit,
      paddingTop: '4px',
      paddingBottom: '4px'
    }
  });

export default styles;
