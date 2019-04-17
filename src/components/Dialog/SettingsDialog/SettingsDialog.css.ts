import {createStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
  collapsed: {
    backgroundColor: '#f5f5f5'
  },
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  appbar: {
    boxShadow: 'none'
  },
  secondary: {
    padding: 0
  }
});

export default styles;
