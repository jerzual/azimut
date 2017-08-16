import * as React from "react";
import * as ReactDOM from "react-dom";
import * as renderer from "react-test-renderer";
import Scores from "../Scores";

describe("Button", () => {
    const payload = {
        data: 'yo'
    };
    let component;
    beforeEach(() => {
        component = renderer.create(
            <Scores>Label</Scores>
        );
    });

    it("should render like snapshot", () => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});