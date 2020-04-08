import React from "react";
import styles from "./AppHeader.module.scss";

import logo from "./../../imgs/logo.png";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <header id="app-header" className={[styles.AppHeader, "d-flex"].join(" ")}>
      <div className={styles.AppLogo}>
        <NavLink to="/">
          <img src={logo} alt="Hacker News" />
        </NavLink>
      </div>
      <nav className={styles.AppNav}>
        <ul className="d-inline-flex">
          <li>
            <NavLink to="/top" activeClassName={styles.Active}>
              top
            </NavLink>
          </li>
          <li>
            <NavLink to="/new" activeClassName={styles.Active}>
              new
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
