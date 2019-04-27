import { Component } from 'inferno';
/**
 * displays bubbles around the selected hero avatar.
 */
export class HeroActionsProps {
  selectedHero?: Array<String>;
  availableActions?: any;
}
export default class HeroActions extends Component<HeroActionsProps, any> {
  render() {
    return (
      <div>
        <li>
          <a />
        </li>
      </div>
    );
  }
}
