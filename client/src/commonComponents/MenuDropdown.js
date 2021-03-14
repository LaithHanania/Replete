import React from 'react';
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from '@material-ui/core/styles';
import Proptypes from "prop-types";

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const MenuDropdown = ({ menuItems, displayComponent }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <span>
      <Button onClick={handleClick}>{displayComponent}</Button>
      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map(function (menuItem, index) {
          return <MenuItem key={index}>{menuItem}</MenuItem>;
        })}
      </StyledMenu>
    </span>
  );
};

MenuDropdown.propTypes = {
  menuItems: Proptypes.arrayOf(Proptypes.element).isRequired,
  displayComponent: Proptypes.element.isRequired
};

export default MenuDropdown;
