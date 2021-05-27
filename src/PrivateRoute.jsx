import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { authContext } from "./AuthProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(authContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
