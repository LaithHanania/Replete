import React from "react";
import Criteria from "./Criteria";
import Events from "./Events";
import CustomEvents from "./CustomEvents";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const Dashboard = () => {
  return (
    <Box>
      <Box marginTop="16px">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Criteria />
          </Grid>
          <Grid item xs={6}>
            <CustomEvents />
          </Grid>
        </Grid>
        <Events />
      </Box>
    </Box>
  );
};

export default Dashboard;
