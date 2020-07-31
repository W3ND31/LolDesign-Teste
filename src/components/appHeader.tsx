import { AppBar, Container } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { Fragment } from "react";
import { useStyles } from "../style/defaultTheme";

const AppHeader = (props: any) => {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">{props.label}</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container className={classes.container}>{props.children}</Container>
    </Fragment>
  );
};

export default AppHeader;
