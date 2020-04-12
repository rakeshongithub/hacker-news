import React, { Suspense } from "react";
import { shallow } from "enzyme";
import { create } from "react-test-renderer";

import App, { AppRoutes, AppHeader } from "./App";

describe("App Component", () => {
  it("renders app component without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders lazy components", async () => {
    const root = create(
      <Suspense fallback={<div>loading...</div>}>
        <App />
      </Suspense>
    );

    await AppRoutes;
    await AppHeader;
    expect(root).toMatchSnapshot();
  });
});
