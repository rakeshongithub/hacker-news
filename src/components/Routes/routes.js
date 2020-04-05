import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import NewsLists from "./../NewsLists/NewsList";

const AppRoutes = () => {
  return (
    <div className="containt-wrapper">
      <Switch>
        <Route exact path="/top" render={() => <NewsLists />} />
        <Redirect from="/" to="/top" />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
};

export default AppRoutes;
