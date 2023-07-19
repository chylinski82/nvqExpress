import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import TCO from './TCO';
import Slinger from './Slinger';
import Contact from './Contact';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 600);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); //  Manage theme state

  const checkScreenSize = () => {
    setIsWideScreen(window.innerWidth > 600);
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => { // useEffect to handle theme changes
    document.body.className = ''; // Clear existing classes
    document.body.classList.add(`${theme}-theme`); // Add the current theme class
  }, [theme]); // Run this effect whenever theme changes

  const handleNav = (state) => {
    setIsNavOpen(state);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleTheme = () => { // Toggle theme
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme preference
  };

  return (
    <div className="App">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Router>
        {!isWideScreen && (
          <button onClick={toggleNav} className="menuButton">
            <i className="fas fa-bars"></i>
            <span>  Menu</span>
          </button>
        )}
        <NavBar isOpen={isNavOpen} handleNav={handleNav} toggleTheme={toggleTheme} /> {/* Pass toggleTheme to NavBar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tco" element={<TCO />} />
          <Route path="/slinger" element={<Slinger />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
