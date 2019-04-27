import { createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    create: {
      bottom: theme.spacing.unit * 2,
      position: 'absolute',
      right: theme.spacing.unit * 2
    }
  });

export default styles;
