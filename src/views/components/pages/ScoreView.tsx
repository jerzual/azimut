import { Component } from 'inferno';

interface ScoreViewProps {
  prefill?: string;
  loginHandler?: Function;
}

export default class ScoreView extends Component<ScoreViewProps, any> {
  render() {
    return (
      <ul id="scores">
        <li />
      </ul>
    );
  }
}
