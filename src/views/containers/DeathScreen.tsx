import * as React from 'react';

export interface DeathProps {

}

export class DeathScreen extends React.Component<DeathProps, any>{
    render() {
        return (
            <div className="screen fade" id="death">
                <h2>You are dead!</h2>
                <p>No more party member available</p>
                <div className="scores">

                </div>
            </div>
        )
    }
}