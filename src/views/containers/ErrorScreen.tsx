import { Component } from 'react';
import * as React from 'react';

export interface ErrorProps{
    status?:string
}

export class ErrorScreen extends Component<ErrorProps, undefined>{
    render(){
        const status = this.props.status ? this.props.status : '404';
        return (
            <div id="error">
                <h1>{status}</h1>
            </div>
        );
    }
}