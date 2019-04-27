import { Component } from 'inferno';
import { Button as RebassButton } from 'rebass';

/**
 * encapsulate rebassButtons in a connected component that sends redux actions.
 */
export interface ButtonProps {}
export default class Button extends Component<ButtonProps, any> {
  render() {
    return <RebassButton {...this.props} />;
  }
}
