import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  DashboardPage,
  LoginPage,
  ClientFormPage,
  FourZeroFour,
  SuccessPage,
  PreviewPage,
  ClientFormEidtPage,
} from "../Pages";
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
          <Route path="/form/:id/:token" exact>
            <ClientFormPage />
          </Route>
          <Route path="/success">
            <SuccessPage />
          </Route>
          <Route path="/preview/:id/:token" exact>
            <PreviewPage />
          </Route>
          <Route path="/edit/:id/:token" exact>
            <ClientFormEidtPage />
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
