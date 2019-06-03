import { Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';

const styles = (theme: Theme) =>
  createStyles({
    form: {
      root: {
        marginRight: theme.spacing(1)
      }
    },
    input: {
      backgroundColor: '#f1f3f4',
      borderRadius: theme.spacing(1),
      padding: theme.spacing(1)
    }
  });

export default styles;
