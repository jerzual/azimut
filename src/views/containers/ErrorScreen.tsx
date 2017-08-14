import { Component } from 'react';
import * as React from 'react';
import PropTypes from 'prop-types';

export interface ErrorProps extends PropTypes{
    status?:string
}

export class ErrorScreen extends Component<ErrorProps, any>{
    render() {
        const status = this.props.status ? this.props.status : '404';
        return (
            <div id="error">
                <h1>{status}</h1>
            </div>
        );
    }
}