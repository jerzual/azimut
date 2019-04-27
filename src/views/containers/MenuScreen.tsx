import { Component } from 'inferno';
import { Link } from 'unirouter';
import './MenuScreen.scss';

export interface MenuProps {}

export class MenuScreen extends Component<MenuProps, any> {
  render() {
    return (
      <div className="screen fade" id="home">
        <div className="centered">
          <h1>Azimut</h1>
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
    );
  }
}
