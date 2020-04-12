import React from "react";
import { shallow, mount } from "enzyme";
import ListItems from "./ListItems";

import { mockNews } from "./../../__mocks__/mocksData";

describe("List Items Component", () => {
  it("should renders list items component without crashing", () => {
    const wrapper = shallow(<ListItems newsLists={mockNews} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it("should return empty array if no data available", () => {
    const wrapper = shallow(<ListItems />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should not break without new list items", () => {
    const wrapper = shallow(<ListItems />);
    expect(wrapper.find("li")).toHaveLength(0);
  });

  it("should render when found new list items", () => {
    const wrapper = mount(<ListItems newsLists={[]} />);

    wrapper.setProps({
      newsLists: mockNews,
    });
    expect(wrapper.find("a").prop("href")).toEqual(
      "https://twitter.com/lemiorhan/status/935578694541770752"
    );
  });
});
