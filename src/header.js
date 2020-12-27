import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Weather Data</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default header;
