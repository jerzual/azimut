import { Component } from 'react';
import * as React from 'react';

export interface PartyProps {}

export class PartyScreen extends Component<PartyProps, any> {
  render() {
    return (
      <div className="screen fade" id="options">
        <h2>Options</h2>
      </div>
    );
  }
}
