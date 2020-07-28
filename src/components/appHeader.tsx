import {AppBar, Container} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, {Fragment} from 'react';

const AppHeader = (props: any) => {
  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">{props.label}</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container className="primaryContainer">{props.children}</Container>
    </Fragment>
  );
};

export default AppHeader;
