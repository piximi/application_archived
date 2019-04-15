import {Theme} from "@material-ui/core";
import {createStyles} from "@material-ui/styles";

const styles = (theme: Theme) => createStyles({
  formControl: {
    width: '100%'
  },
  input: {
    backgroundColor: '#f1f3f4',
    borderRadius: theme.spacing.unit,
    padding: theme.spacing.unit
  }
});

export default styles;
