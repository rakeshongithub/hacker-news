import React from "react";
import { shallow, mount } from "enzyme";
import TopNewsLists from "./TopNewsLists";
import ListItems from "./../ListItems";

describe("Top New Lists Component", () => {
  it("should renders component without crashing", () => {
    const wrapper = shallow(<TopNewsLists />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should renders list items component", () => {
    const wrapper = mount(<TopNewsLists />);
    expect(wrapper.find(ListItems).length).toEqual(1);
  });
});
