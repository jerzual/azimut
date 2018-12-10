import './LoadingScreen.scss';

import * as React from 'react';

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
