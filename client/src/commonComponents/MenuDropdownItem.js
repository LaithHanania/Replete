import React from 'react';
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import Proptypes from "prop-types";

const StyledBox = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    color: "black",
  },
})(Box);

const MenuDropdownItem = (props) => {
  return <StyledBox>{props.children}</StyledBox>;
};

MenuDropdownItem.propTypes = {
  children: Proptypes.oneOfType([
    Proptypes.arrayOf(Proptypes.node),
    Proptypes.node,
  ]).isRequired,
};

export default MenuDropdownItem;
