import * as React from "react";
import * as ReactDOM from "react-dom";
import * as renderer from "react-test-renderer";
import ViewActions from "../ViewActions";

describe("ViewActions", () => {
    const abilities = {
        canMove: false,
        canAttack: false
    };
    let component;
    beforeEach(() => {
        component = renderer.create(
            <ViewActions abilities={abilities}></ViewActions>
        );
    });

    it("should render like snapshot", () => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("should have correct prop values", () => {
        const tree = component.toJSON();
        expect(tree.props).toBe("Button, Willson");
    });

});