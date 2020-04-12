import React from "react";
import { shallow } from "enzyme";

import LoadingComponent from "./Loading";

describe("Loading Component", () => {
  it("renders loading component without crashing", () => {
    shallow(<LoadingComponent />);
  });

  it("should have div tag with text", () => {
    const wrapper = shallow(<LoadingComponent />);
    const elm = <div>loading...</div>;
    expect(wrapper.contains(elm)).toEqual(true);
  });

  it("should have text [loading...] present in div", () => {
    const wrapper = shallow(<LoadingComponent />);
    const loading = wrapper.find("div").text();
    expect(loading).toEqual("loading...");
  });
});
