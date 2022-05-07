import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Registration from "./containers/Registration";
import Login from "./containers/Login";
import Home from "./containers/Home";
import Admin from "./containers/Admin";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/register" component={Registration} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default withRouter(Routes);
