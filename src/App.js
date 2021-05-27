import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import Home from "./components/Home";
import Login from "./components/Login";
import Sigup from "./components/Sigup";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="container">
          <Switch>
            <Route component={Login} path="/login" />
            <PrivateRoute exact component={Home} path="/" />
            <Route component={Sigup} path="/signup" />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
