import { Component } from "inferno";
import { renderIntoContainer } from "inferno-test-utils";

import Button from "./Button";

describe("Button", () => {
  let renderedTree;
  beforeEach(() => {
    renderedTree = renderIntoContainer(<Button>Hello</Button>);
  });

  it("should render correctly", () => {
    const result = renderedTree.getRenderOutput();
    console.log(result);
  });

  it("should have correct prop values", () => {
    const result = renderedTree.getRenderOutput();
    const propValues = result.props.children.join("");
    expect(propValues).toBe("Button, Willson");
  });
});
