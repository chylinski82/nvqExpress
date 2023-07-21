import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';  
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import HomePage from './HomePage';
import TCO from './TCO';
import Slinger from './Slinger';
import Contact from './Contact';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Using typeof window !== 'undefined' to check if we are in a browser environment or not.
  // window object is not defined on the server, so we must check before using it to avoid errors during server-side rendering.
  // If we are in a browser, check if the window width is greater than 600. If it is, set isWideScreen to true. If not, or we are not in a browser, set isWideScreen to false.
  const [isWideScreen, setIsWideScreen] = useState(typeof window !== 'undefined' ? window.innerWidth > 600 : false); 
  // Similarly, localStorage is not defined on the server, so we must check before using it.
  // If we are in a browser, get the 'theme' item from localStorage. If it doesn't exist, default to 'light'.
  // If we are not in a browser, simply default to 'light'.
  const [theme, setTheme] = useState(typeof localStorage !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light'); //  Manage theme state
  const location = useLocation();

  const checkScreenSize = () => {
    // Checks if the window object is defined before using it.
    // This check prevents errors during server-side rendering, where the window object doesn't exist.
    if (typeof window !== 'undefined') {
        setIsWideScreen(window.innerWidth > 600);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => { // useEffect to handle theme changes
    document.body.className = ''; // Clear existing classes
    document.body.classList.add(`${theme}-theme`); // Add the current theme class
  }, [theme]); // Run this effect whenever theme changes

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "NVQ Slinger Signaller - Home";
    } else if (location.pathname === "/slinger") {
      document.title = "NVQ Slinger Signaller - Slinger Blue Card";
    } else if (location.pathname === "/TCO") {
      document.title = "NVQ Tower Crane Operator";
    }
    // Add more else if conditions for other routes as needed
  }, [location]);

  const handleNav = (state) => {
    setIsNavOpen(state);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleTheme = () => { 
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    // Checks if the localStorage object is defined before using it.
    // This check prevents errors during server-side rendering, where the localStorage object doesn't exist.
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', newTheme); // Save theme preference
    }
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
