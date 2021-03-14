import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUser } from "../contexts/User/UserState";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [userState] = useUser();
  const { user } = userState;
  const isLoggedIn = !!user;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="signin" />
      }
    ></Route>
  );
};

export default PrivateRoute;
