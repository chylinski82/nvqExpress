import React from 'react';
import './App.css';

import heroImage from './images/hero.jpeg';

const Contact = () => {
  return (
    <main className="content">
      <div className="hero">
        <h1>Contact</h1>
        <img src={heroImage} alt="Hero" />
      </div>
      <div>
        <p>Contact...</p>
      </div>
    </main>
  );
};

export default Contact;
