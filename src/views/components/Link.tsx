import { Component } from 'react';
import * as React from 'react';

interface LinkProps{
    to:string;
    options?:any;
}

export default class Link extends Component<LinkProps, any>{
    render(){
             return (<a href="uniloc(name)">this.props.children</a>);
    }
}