import React from "react";
import { shallow } from "enzyme";
import AppHeader from "./AppHeader";
import styles from "./AppHeader.module.scss";
import { NavLink } from "react-router-dom";

import logo from "./../../imgs/logo.png";

describe("App Header Component", () => {
  it("should renders app header component without crashing", () => {
    const wrapper = shallow(<AppHeader />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should have header tag with AppHeader className", () => {
    const wrapper = shallow(<AppHeader />);
    const appHeaderClass = wrapper.find("header").hasClass("AppHeader");
    expect(appHeaderClass).toEqual(true);
  });

  it("should present logo image on header", () => {
    const wrapper = shallow(<AppHeader />);
    const logoImgs = <img src={logo} alt="Hacker News" />;
    expect(wrapper.contains(logoImgs)).toEqual(true);
  });

  it("logo should be an anchor link", () => {
    const wrapper = shallow(<AppHeader />);
    const logoImgsLink = (
      <NavLink to="/">
        <img src={logo} alt="Hacker News" />
      </NavLink>
    );
    expect(wrapper.contains(logoImgsLink)).toEqual(true);
  });

  it("should present top nav link", () => {
    const wrapper = shallow(<AppHeader />);
    const topNavLink = (
      <NavLink to="/top" activeClassName={styles.Active}>
        top
      </NavLink>
    );
    expect(wrapper.contains(topNavLink)).toEqual(true);
  });

  it("should present new nav link", () => {
    const wrapper = shallow(<AppHeader />);
    const newNavLink = (
      <NavLink to="/new" activeClassName={styles.Active}>
        new
      </NavLink>
    );
    expect(wrapper.contains(newNavLink)).toEqual(true);
  });
});
