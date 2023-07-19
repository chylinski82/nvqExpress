import React from 'react';
import './App.css';

import heroImage from './images/hero.jpeg';

const Slinger = () => {
  return (
    <main className="content">
      <div className="hero">
        <h1>Slinger/Signallers</h1>
        <img src={heroImage} alt="Hero" />
      </div>
      <div>
        <p>Slingers...</p>
      </div>
    </main>
  );
};

export default Slinger;
