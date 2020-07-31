import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { blue, indigo } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900],
    },
    primary: {
      main: indigo[700],
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  },
  container: {},
}));

export default theme;
