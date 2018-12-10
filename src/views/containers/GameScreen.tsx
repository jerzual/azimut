import { Component } from 'react';
import * as React from 'react';

export interface GameProps {
  city?: Object;
}

export class GameScreen extends Component<GameProps, any> {
  rotateLeft(evt: Event) {}
  rotateRight(evt: Event) {}
  render() {
    return (
      <div className="screen" id="game">
        <div className="ui">
          <div id="hud">
            <div id="current-hero">
              <div className="hud-life">&lt;42&gt;</div>
              <div className="hud-ammo" />
            </div>
            <div className="popup" id="actions">
              <button>&lt;</button>
              <a className="btn" href="#pause">
                II
              </a>
              <button>&gt;</button>
              <button>Generate ❄</button>
              <button>Move 👣</button>
              <button>Attack ⚔</button>
              <button>End Turn</button>
            </div>
            <div id="party-members">
              <button className="member">A</button>
              <button className="member">B</button>
              <button className="member">C</button>
              <button className="member">D</button>
            </div>
            <div id="hero-items">
              <div className="hero-item" />
              <div className="hero-item" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
