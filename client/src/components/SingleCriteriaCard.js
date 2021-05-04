import React from "react";
import { Grid, Box } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import Proptypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { PRIMARY, LIGHT_GREY } from "helpers/constants";

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
    backgroundColor: PRIMARY,
  },
}))(LinearProgress);

const SingleCriteriaCard = ({
  label,
  weight,
  onDelete,
  onEdit,
  id,
  description,
}) => {
  return (
    <Box borderRadius={16} paddingLeft="8px" marginTop="8px" bgcolor={LIGHT_GREY}>
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs={3}>
          {label}:
        </Grid>
        <Grid item xs={6}>
          <BorderLinearProgress variant="determinate" value={weight * 10} />
        </Grid>
        <Grid item xs={1}>
          {weight}
        </Grid>
        <Grid item xs={2}>
          <Box display="flex" flexDirection="row">
            <IconButton
              onClick={() => {
                onEdit({ label, weight, description }, id);
              }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={() => {
                onDelete(label);
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

SingleCriteriaCard.propTypes = {
  label: Proptypes.string.isRequired,
  weight: Proptypes.number.isRequired,
  description: Proptypes.string,
  onDelete: Proptypes.func,
  onEdit: Proptypes.func,
  id: Proptypes.string,
};

export default SingleCriteriaCard;
