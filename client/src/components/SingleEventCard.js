import React from 'react';
import { Box, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import moment from 'moment';

const SingleEventCard = ({ label, date, description, _id }) => {
  return (
  <Grid container alignItems="flex-start" spacing={2}>
      <Grid item xs={2}>
        <Link to={`/event/${_id}`}>{label}</Link>
      </Grid>
      <Grid item xs={2}>
        {moment(date).format("MMM Do YYYY")}
      </Grid>
      {description ? <Box>{description}</Box> : null}
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