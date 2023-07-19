// HomePage.js
import React from 'react';
import heroImage from './images/hero.jpeg';

const HomePage = () => {
  return (
    <main className="content">
      <div className="hero">
        <h1>NVQ Express</h1>
        <img src={heroImage} alt="Hero" />
      </div>
      <div>
        <p>Description of the freelance activity...</p>
      </div>
    </main>
  );
};

export default HomePage;
{/* Add other routes as needed */}