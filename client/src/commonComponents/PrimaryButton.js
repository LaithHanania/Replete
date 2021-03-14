import React from 'react';
import { Button, withStyles } from "@material-ui/core";
import Proptypes from "prop-types";

const StyledButton = withStyles({
  root: {
    background: "#008CBA",
    color: "white",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#008CBA",
      color: "white",
    },
  },
})(Button);

const PrimaryButton = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

PrimaryButton.propTypes = {
  text: Proptypes.string.isRequired,
  onClick: Proptypes.func.isRequired,
};

export default PrimaryButton;