import * as React from 'react';
import PropTypes from 'prop-types';

interface ScoreViewProps {
    prefill?: string;
    loginHandler?: Function;
}

export default class ScoreView extends React.Component<ScoreViewProps, any>{
    render() {
        return (
            <ul id='scores'>
                <li></li>
            </ul>
        );
    }
}