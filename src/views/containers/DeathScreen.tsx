import * as React from 'react';

export interface DeathProps {
}

export class DeathScreen extends React.Component<DeathProps, undefined>{
    render() {
        return (
            <div className="screen fade" id="death">
                <h2>You are dead!</h2>
                <div className="scores">

                </div>
            </div>
        )
    }
}