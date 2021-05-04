import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import { PRIMARY_DARK } from "helpers/constants";

const Title = ({ text }) => {
  return (
    <Box color={PRIMARY_DARK}>
      <Typography variant="h4" style={{ paddingBottom: 6 }}>
        {text}
      </Typography>
    </Box>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
