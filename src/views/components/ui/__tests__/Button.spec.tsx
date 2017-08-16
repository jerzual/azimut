import * as React from "react";
import * as ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Button from "../Button";

describe("Button", () => {
    beforeEach(() => {
        renderer.render(<Button>Hello</Button>);
    });

    it("should render correctly", () => {
        const result = renderer.getRenderOutput();
        console.log(result);
    });

    it("should have correct prop values", () => {
        const result = renderer.getRenderOutput();
        const propValues = result.props.children.join("");
        expect(propValues).toBe("Button, Willson");
    });
});