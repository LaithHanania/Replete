import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppHeaderMenu from "./AppHeaderMenu";
import { useUser } from "../contexts/User/UserState";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const AppHeader = () => {
  const [userState] = useUser();
  const { user } = userState;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <AppHeaderMenu />
          <Typography variant="h6" className={classes.title}>
            Replete
          </Typography>
          <Button color="inherit" href="/dashboard">
            Dashboard
          </Button>
          <Button color="inherit" href={!user ? "/auth/google" : "/api/logout"}>
            {!user ? "Login" : "Logout"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppHeader;
