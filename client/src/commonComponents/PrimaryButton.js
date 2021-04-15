import React from "react";
import { Button, withStyles } from "@material-ui/core";
import Proptypes from "prop-types";
import { primary } from "helpers/constants";

const StyledButton = withStyles({
  root: {
    background: primary,
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
