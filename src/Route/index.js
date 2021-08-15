import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { DashboardPage, LoginPage } from "../Pages";
import ProtectedRoute from "../Helpers/ProtectedRoute";

const index = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <ProtectedRoute path="/dashboard" component={DashboardPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default index;
