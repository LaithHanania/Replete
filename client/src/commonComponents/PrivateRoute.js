import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../recoil/atoms";
import Proptypes from "prop-types";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useRecoilValue(userState);
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

PrivateRoute.propTypes = {
  component: Proptypes.elementType,
};

export default PrivateRoute;
