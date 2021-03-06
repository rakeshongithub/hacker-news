import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import styles from "./App.module.scss";
import LoadingComponent from "./components/UI/Loading";
export const AppRoutes = lazy(() => import("./components/Routes/routes"));
export const AppHeader = lazy(() => import("./components/Header/AppHeader"));

const App = () => {
  return (
    <Router basename={"/"}>
      <Suspense fallback={<LoadingComponent />}>
        <div className={["container", styles.App].join(" ")}>
          <AppHeader />
          <AppRoutes />
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
