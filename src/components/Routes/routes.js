import React, { Suspense, lazy } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import LoadingComponent from "../UI/Loading";
const TopNewsLists = lazy(() =>
  import("../NewsLists/TopNewsLists/TopNewsLists")
);
const NewNewsLists = lazy(() =>
  import("../NewsLists/NewNewsLists/NewNewsLists")
);

const AppRoutes = () => {
  return (
    <div className="containt-wrapper">
      <Suspense fallback={<LoadingComponent />}>
        <Switch>
          <Route
            exact
            path="/top"
            render={() => <TopNewsLists name="topNews" />}
          />
          <Route
            exact
            path="/new"
            render={() => <NewNewsLists name="newNews" />}
          />
          <Redirect from="/" to="/top" />
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default AppRoutes;
