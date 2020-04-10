import React, { Suspense, lazy } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import LoadingComponent from "../UI/Loading";
const NewsLists = lazy(() => import("./../NewsLists/NewsList"));

const AppRoutes = () => {
  return (
    <div className="containt-wrapper">
      <Suspense fallback={<LoadingComponent />}>
        <Switch>
          <Route exact path="/top" render={() => <NewsLists />} />
          <Redirect from="/" to="/top" />
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default AppRoutes;
