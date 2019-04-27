import { Component } from "inferno";

import HeroActions from "./HeroActions";
import { renderIntoContainer } from "inferno-test-utils";

describe("HeroActions", () => {
  let component;
  beforeEach(() => {
    component = <HeroActions />;
  });

  it("should render correctly", () => {
    const tree = renderIntoContainer(component);
    console.log(tree);
  });

  it("should have correct prop values", () => {
    const tree = renderIntoContainer(component);
    const result = component.toJSON();
    expect(result).toBe("HeroActions, Willson");
  });
});
