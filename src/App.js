import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import styles from "./App.module.scss";
import LoadingComponent from "./components/UI/Loading";
const AppRoutes = lazy(() => import("./components/Routes/routes"));
const AppHeader = lazy(() => import("./components/Header/AppHeader"));

const App = () => {
  return (
    <Router basename={"/"}>
      <Suspense fallback={<LoadingComponent />}>
        <div className={["container d-flex flex-column", styles.App].join(" ")}>
          <AppHeader />
          <AppRoutes />
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
