import './LoadingScreen.scss';

import { Component } from 'inferno';

export default () => {
  return (
    <div className="circle-loader">
      <div className="circle circle-0" />
      <div className="circle circle-1" />
      <div className="circle circle-2" />
      <div className="circle circle-3" />
      <div className="circle circle-4" />
    </div>
  );
};
