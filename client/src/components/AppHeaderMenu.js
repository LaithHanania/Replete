import MenuDropdown from "../commonComponents/MenuDropdown";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";

const AppHeaderMenu = () => {
  const menuListItems = [
    <div>
      <SettingsIcon />
      Settings
    </div>,
  ];

  const menuDispay = <MenuIcon style={{fill: "white"}}/>;

  return (
    <MenuDropdown menuItems={menuListItems} displayComponent={menuDispay} />
  );
};

export default AppHeaderMenu;
