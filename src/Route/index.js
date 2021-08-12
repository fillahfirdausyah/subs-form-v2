import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DashboardPage, LoginPage } from "../Pages";

const index = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" exact>
            <DashboardPage />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default index;
