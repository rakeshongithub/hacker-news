import React, { Suspense } from "react";
import { shallow } from "enzyme";
import { create } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

import AppRoutes, { TopNewsLists, NewNewsLists } from "./routes";

describe("App Component", () => {
  it("renders app routes component without crashing", () => {
    const wrapper = shallow(<AppRoutes />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders lazy components", async () => {
    const root = create(
      <div className="containt-wrapper">
        <Suspense fallback={<div>loading...</div>}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </Suspense>
      </div>
    );

    await TopNewsLists;
    await NewNewsLists;
    expect(root).toMatchSnapshot();
  });
});
