import React, { useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useUser } from "./contexts/User/UserState";
import { getUser, setLoading } from "./contexts/User/UserAction";
import AppHeader from "./components/AppHeader";
import Container from "@material-ui/core/Container";
import AboutUs from "./components/AboutUs";
import Dashboard from "./components/Dashboard";
import Event from "./components/Event";
import PrivateRoute from "./commonComponents/PrivateRoute";
import LoggedOutWarning from "./commonComponents/LoggedOutWarning";

const App = () => {
  const [, userDispatch] = useUser();
  const fetchUser = useCallback(async () => {
    await getUser(userDispatch);
    setLoading(userDispatch, false);
  }, [userDispatch]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <Router>
      <Container>
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
