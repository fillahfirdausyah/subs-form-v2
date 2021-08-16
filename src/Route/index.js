import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { DashboardPage, LoginPage, ClientFormPage, FourZeroFour } from "../Pages";
import ProtectedRoute from "../Helpers/ProtectedRoute";

const index = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/form/:id/:token">
            <ClientFormPage />
          </Route>
          <ProtectedRoute path="/dashboard" component={DashboardPage} />
          <Route path="*">
            <FourZeroFour />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default index;
