import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const Title = ({ text }) => {
  return (
    <Typography variant="h4" style={{ paddingBottom: 6 }}>
      {text}
    </Typography>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
