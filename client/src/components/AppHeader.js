import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppHeaderMenu from "./AppHeaderMenu";
import { useRecoilValue } from "recoil";
import { userState } from "../recoil/atoms";
import { PRIMARY, PRIMARY_TEXT } from "helpers/constants";

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

const StyledToolbar = withStyles({
  root: {
    backgroundColor: PRIMARY,
  },
})(Toolbar);

const AppHeader = () => {
  const user = useRecoilValue(userState);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <StyledToolbar>
          <AppHeaderMenu />
          <Typography
            variant="h6"
            className={classes.title}
            color={PRIMARY_TEXT}
          >
            Replete
          </Typography>
          <Button color="inherit" href="/dashboard">
            Dashboard
          </Button>
          <Button
            color="inherit"
            href="/calendar"
          >
            Calendar
          </Button>
          <Button color="inherit" href={!user ? "/auth/google" : "/api/logout"}>
            {!user ? "Login" : "Logout"}
          </Button>
        </StyledToolbar>
      </AppBar>
    </div>
  );
};

export default AppHeader;
