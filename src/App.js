import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppHeader from "./components/Header/AppHeader";
import styles from "./App.module.scss";
import AppRoutes from "./components/Routes/routes";

const App = () => {
  return (
    <Router basename={"/"}>
      <div className={["container d-flex flex-column", styles.App].join(" ")}>
        <AppHeader />
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
