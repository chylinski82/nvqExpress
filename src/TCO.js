import React from 'react';
import './App.css';

import heroImage from './images/hero.jpeg';

const TCO = () => {
  return (
    <main className="content">
      <div className="hero">
        <h1>Tower Crane Operators</h1>
        <img src={heroImage} alt="Hero" />
      </div>
      <div>
        <p>Tower Crane Ops...</p>
      </div>
    </main>
  );
};

export default TCO;
