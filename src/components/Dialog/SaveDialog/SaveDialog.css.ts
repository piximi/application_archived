import {createStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
  closeButton: {
    color: theme.palette.grey[500],
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit
  },
  dialogActions: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit
  },
  dialogContent: {
    margin: 0,
    padding: 0
  },
  dialogTitle: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2
  }
});

export default styles;
