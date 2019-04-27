import { Component } from 'inferno';
import { Relative, Absolute, Button } from 'rebass';
/**
 * Launch actions such as rotate minimap,
 * pan across 4 directions
 */
export interface ViewActionsProps {
  abilities: any;
}

export default class ViewActions extends Component<ViewActionsProps, any> {
  render() {
    return (
      <Relative>
        <Button />
      </Relative>
    );
  }
}
