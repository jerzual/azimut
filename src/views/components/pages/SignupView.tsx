import { Component } from 'inferno';

interface SignupViewProps {
  prefill?: string;
  loginHandler?: Function;
}

export default class SignupView extends Component<SignupViewProps, any> {
  render() {
    return (
      <form id="signup">
        <div className="input-group" />
      </form>
    );
  }
  handleCreatePlayer() {}
}
