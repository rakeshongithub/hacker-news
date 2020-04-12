import React from "react";
import { shallow, mount } from "enzyme";
import NewNewsLists from "./NewNewsLists";
import ListItems from "./../ListItems";

describe("New News Lists Component", () => {
  it("should renders component without crashing", () => {
    const wrapper = shallow(<NewNewsLists />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should renders list items component", () => {
    const wrapper = mount(<NewNewsLists />);
    expect(wrapper.find(ListItems).length).toEqual(1);
  });
});
