import * as React from 'react';

interface ScoreViewProps {
    prefill?: string;
    loginHandler?: Function;
}

export default class ScoreView extends React.Component<ScoreViewProps, undefined>{
    render() {
        return (
            <ul id='scores'>
                <li></li>
            </ul>
        );
    }
}