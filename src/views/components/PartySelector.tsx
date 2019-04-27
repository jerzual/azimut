// presents current party members and allow to select one.

import { Component } from 'inferno';

export class PartySelectorProps {
  party?: Array<String>;
  selectedParty?: any;
}
export class PartySelector extends Component<PartySelectorProps, any> {
  render() {
    return (
      <ul>
        <li>
          <a />
        </li>
      </ul>
    );
  }
}

export default PartySelector;
