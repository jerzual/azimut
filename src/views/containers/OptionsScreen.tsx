import { Component } from 'react';
import * as React from 'react';

export interface SettingsProps {
    compiler?: string;
    framework?: string;
}

export class OptionsScreen extends Component<SettingsProps, undefined>{
    render() {
        return (
            <div className="screen fade" id="options">
                <h2>Options</h2>
                <form name="optionsForm">
                    <fieldset name="cameraOptions">
                        <legend>Camera</legend>
                        <input type="range" name="fov" />
                        <input type="number" name="panningSpeed" />
                        <input type="zoom" name="zoomValue" />
                    </fieldset>
                    <fieldset name="inputOptions">
                        <legend>Input</legend>
                        <input type="radio" name="type" value="touch" />
                        <input type="radio" name="type" value="mouse+keyboard" />
                        <input type="radio" name="type" value="gamepad" />
                    </fieldset>
                </form>
                <a href="#home">Back</a>
            </div>
        )
    }
}