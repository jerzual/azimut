import * as React from 'react';
import { Button as RebassButton } from 'rebass';

/**
 * encapsulate rebassButtons in a connected component that sends redux actions.
 */
export interface ButtonProps{
}
export default class Button extends React.Component<ButtonProps, any>{
        render(){
            return (<RebassButton {...this.props} />)
        }
}