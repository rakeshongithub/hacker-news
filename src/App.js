import React from "react";
import AppHeader from "./components/Header/AppHeader";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={["container d-flex flex-column", styles.App].join(" ")}>
      <AppHeader />
      hello
    </div>
  );
}

export default App;
