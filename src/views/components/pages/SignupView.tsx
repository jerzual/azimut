import * as React from 'react';

interface SignupViewProps {
    prefill?: string;
    loginHandler?: Function;
}

export default class SignupView extends React.Component<SignupViewProps, undefined>{
    render() {
        return (
            <form id='signup'>
                <div className='input-group'>
                </div>
                
            </form>
        );
    }
}