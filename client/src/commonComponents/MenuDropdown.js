import { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Proptypes from "prop-types";

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
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map(function (menuItem, index) {
          return <MenuItem key={index}>{menuItem}</MenuItem>;
        })}
      </Menu>
    </span>
  );
};

MenuDropdown.propTypes = {
  menuItems: Proptypes.arrayOf(Proptypes.element).isRequired,
  displayComponent: Proptypes.element.isRequired
};

export default MenuDropdown;
