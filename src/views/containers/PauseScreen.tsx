import * as React from 'react';

export interface PauseProps {}

export class PauseScreen extends React.Component<PauseProps, any> {
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
