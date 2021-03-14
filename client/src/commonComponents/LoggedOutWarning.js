import React from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import LoginButton from "./LoginButton";
import Grid from "@material-ui/core/Grid";

const LoggedOutWarning = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "80vh" }}
    >
      <Typography variant="h4">
        Login / Signup With Google To Access Our Features!
      </Typography>
      <Box style={{ justifyContent: "center" }}>
        <LoginButton />
      </Box>
    </Grid>
  );
};

export default LoggedOutWarning;
