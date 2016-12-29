import { Component } from 'react';
import * as React from 'react';
import { Link } from 'unirouter'
import './MenuScreen.scss';

export interface MenuProps {

}

export class MenuScreen extends Component<MenuProps, undefined>{
    render() {
        return (
            <div className="screen fade" id="home">
                <div className="centered">
                    <h1>Plague</h1>
                    <ul>
                        <li>
                            <Link name="game">New Game</Link>
                        </li>
                        <li>
                            <Link name="options">Options</Link>
                        </li>
                        <li>
                            <Link name="about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}