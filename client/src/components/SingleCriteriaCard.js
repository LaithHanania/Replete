import React from "react";
import { Grid } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import Proptypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#3C3939",
  },
}))(LinearProgress);

const SingleCriteriaCard = ({ label, weight, onDelete }) => {
  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item xs={3}>
        {label}:
      </Grid>
      <Grid item xs={6}>
        <BorderLinearProgress variant="determinate" value={weight * 10} />
      </Grid>
      <Grid item xs={2}>
        {weight}
      </Grid>
      <Grid item xs={1}>
        <IconButton
          onClick={() => {
            onDelete(label);
          }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

SingleCriteriaCard.propTypes = {
  label: Proptypes.string.isRequired,
  weight: Proptypes.number.isRequired,
  description: Proptypes.string,
  onDelete: Proptypes.func,
};

export default SingleCriteriaCard;
