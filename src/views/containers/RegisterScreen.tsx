import { Component } from 'inferno';

import SignupView from '../components/pages/SignupView';
import LoginView from '../components/pages/LoginView';

export interface RegisterProps {
  login: boolean;
}

export class RegisterScreen extends Component<RegisterProps, any> {
  render() {
    return <div>{this.props.login ? <LoginView /> : <SignupView />}</div>;
  }
}
