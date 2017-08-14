import * as React from 'react';

export interface ButtonProps{
    action:string;
    payload?:any;
}
export default class Button extends React.Component<ButtonProps, any>{
        render(){
            return (<button />)
        }
}