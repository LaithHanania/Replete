import React from "react";
import { Box, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";

const SingleEventCard = ({ label, date, description, _id }) => {
  return (
    <Grid container alignItems="flex-start" spacing={2} justify="center">
      <Grid item xs={2}>
        <Box display="flex" justifyContent="center">
          <Link style={{ color: "black" }} to={`/event/${_id}`}>
            {label}
          </Link>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box
          fontStyle="italic"
          display="flex"
          justifyContent="center"
          color={description ? "black" : "gray"}
        >
          {description ?? "No description. Try adding one!"}
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" justifyContent="center">
          {moment(date).format("MMM Do YYYY")}
        </Box>
      </Grid>
    </Grid>
  );
};

SingleEventCard.propTypes = {
  _id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default SingleEventCard;
