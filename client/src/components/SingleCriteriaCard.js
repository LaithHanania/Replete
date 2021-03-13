import { Box, Grid } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import Proptypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

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
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

const SingleCriteriaCard = ({ label, weight, description }) => {
  return (
    <Grid container alignItems="flex-start" spacing={2}>
      <Grid item xs={2}>
        {label}:
      </Grid>
      <Grid item xs={3}>
        <BorderLinearProgress variant="determinate" value={weight} />
      </Grid>
      <Grid item xs={1}>
        {weight}
      </Grid>
      {description ? <Box>{description}</Box> : null}
    </Grid>
  );
};

SingleCriteriaCard.propTypes = {
  label: Proptypes.string.isRequired,
  weight: Proptypes.number.isRequired,
  description: Proptypes.string,
};

export default SingleCriteriaCard;
