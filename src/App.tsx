import React, { useEffect } from "react";
import "./App.css";
import cityAPi from "api/cityApi";
import { Route, Switch } from "react-router";
import LoginPage from "features/auth/pages/LoginPage";
import AdminLayout from "components/Layout/Admin";
import { NotFound, Private } from "components/common";

function App() {
  useEffect(() => {
    cityAPi.getAll().then((response) => console.log(response));
  });
  return (
    <div>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Private path="/admin" exact>
          <AdminLayout />
        </Private>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
