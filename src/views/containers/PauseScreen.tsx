import * as React from 'react';

export interface PauseProps {

}

export class PauseScreen extends React.Component<PauseProps, undefined>{
    render() {
        return (
            <div className="screen fade" id="pause">
                <h2>Pause</h2>
                <figure>
                    <canvas id="minimap"></canvas>
                    <figcaption className="legend"></figcaption>
                </figure>
            </div>
        )
    }
}