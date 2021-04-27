import React, { useEffect, useCallback, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getUser } from "repository/index";
import AppHeader from "components/AppHeader";
import Container from "@material-ui/core/Container";
import AboutUs from "components/AboutUs";
import Dashboard from "components/Dashboard";
import Event from "components/Event";
import PrivateRoute from "commonComponents/PrivateRoute";
import LoggedOutWarning from "commonComponents/LoggedOutWarning";
import { useSetRecoilState } from "recoil";
import { userState } from "./recoil/atoms";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const setUser = useSetRecoilState(userState);

  const fetchUser = useCallback(async () => {
    setIsLoading(true);
    const user = await getUser();
    setUser(user);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUser();
  }, []);

  return isLoading ? (
    <Box
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  ) : (
    <Router>
      <Container maxWidth="xl">
        <AppHeader />
        <Route path="/about" component={AboutUs} />
        <Route path="/signin" component={LoggedOutWarning} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/event/:id" exact component={Event} />
      </Container>
    </Router>
  );
};

export default App;
