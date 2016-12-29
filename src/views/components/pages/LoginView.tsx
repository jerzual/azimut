import { Component } from 'react';
import * as React from 'react';
import { Input } from 'rebass';

interface LoginViewProps {
    prefill?: string;
    loginHandler?: Function;
}

export default class LoginView extends Component<LoginViewProps, undefined>{
    render() {
        return (
            <form id='login'>

                <Input
                    label="login"
                    name="login"
                    placeholder="Username"
                    rounded
                    type="text"
                    />
                <Input
                    label="password"
                    name="password"
                    rounded
                    type="password"
                    />
            </form>
        );
    }
}