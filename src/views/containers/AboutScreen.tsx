import { Component } from 'react';
import * as React from 'react';

export interface AboutProps {

}

export class AboutScreen extends Component<AboutProps, undefined>{
    render() {
        return (
            <div className="screen fade" id="about">
                <h2>About</h2>
                <p>A game prototype crafted with love by jibhaine</p>
                <p>made using the following techs : html5 / javascript / webgl</p>
                <p>libs : react, THREE.js, tone.js, </p>
            </div>
        )
    }
}