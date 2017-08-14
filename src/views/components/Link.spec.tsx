import * as React from "react";
import * as ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Link from "./Link";

describe("Link", () => {

    beforeEach(() => {
        renderer.render(<Link to="/" />);
    });

    it("should render correctly", () => {
        const result = renderer.getRenderOutput();
        console.log(result);
    });

    it("should have correct prop values", () => {
        const result = renderer.getRenderOutput();
        const propValues = result.props.children.join("");
       expect(propValues).toBe( "Link, Willson");
    });
});