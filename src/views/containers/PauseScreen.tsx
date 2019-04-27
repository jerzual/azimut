import { Component } from 'inferno';

export interface PauseProps {}

export class PauseScreen extends Component<PauseProps, any> {
  render() {
    return (
      <div className="screen fade" id="pause">
        <h2>Pause</h2>
        <figure>
          <canvas id="minimap" />
          <figcaption className="legend" />
        </figure>
      </div>
    );
  }
}
