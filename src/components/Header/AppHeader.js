import React from "react";
import styles from "./AppHeader.module.scss";

import logo from "./../../imgs/logo.png";

const AppHeader = () => {
  return (
    <header id="app-header" className={[styles.AppHeader, "d-flex"].join(" ")}>
      <div className={styles.AppLogo}>
        <img src={logo} alt="Hacker News" />
      </div>
      <nav className={styles.AppNav}>
        <ul className="d-inline-flex">
          <li>top</li>
          <li>new</li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
