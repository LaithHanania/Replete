import React from 'react';
import { Link } from "react-router-dom";
import MenuDropdown from "../commonComponents/MenuDropdown";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";
import InfoIcon from "@material-ui/icons/Info";
import MenuDropdownItem from '../commonComponents/MenuDropdownItem';

const AppHeaderMenu = () => {
  const menuListItems = [
    <MenuDropdownItem key="dropdown">
      <SettingsIcon /> Settings
    </MenuDropdownItem>,
    <Link to="/about" style={{ textDecoration: "none" }} key="link">
      <MenuDropdownItem>
        <InfoIcon /> About Us
      </MenuDropdownItem>
    </Link>,
  ];

  const menuDispay = <MenuIcon style={{ fill: "white" }} />;

  return (
    <MenuDropdown menuItems={menuListItems} displayComponent={menuDispay} />
  );
};

export default AppHeaderMenu;
