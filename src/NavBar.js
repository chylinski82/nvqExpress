import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const NavBar = ({ isOpen, handleNav, toggleTheme }) => { // Receive toggleTheme as a prop
  // We use 'typeof window !== 'undefined'' to check if we're in a browser context or not.
  // The 'window' object is not defined on the server, so we need to make this check to prevent errors during server-side rendering.
  // If we are in a browser context, we check if the window's width is greater than 600. If it is, we set 'isWideScreen' to true. If not, or if we're not in a browser context (i.e., on the server), we set 'isWideScreen' to false.
  const [isWideScreen, setIsWideScreen] = useState(typeof window !== 'undefined' ? window.innerWidth > 600 : false);


  const checkScreenSize = () => {
    // Again, we first check if we're in a browser context by seeing if 'window' is defined.
    // If it is, we can safely check the window's inner width and use it to set the state of 'isWideScreen'.
    // If 'window' is not defined (i.e., on the server), we don't do anything.
    if (typeof window !== 'undefined') {
        setIsWideScreen(window.innerWidth > 600);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isWideScreen) {
      handleNav(false);
    }
  }, [isWideScreen, handleNav]);

  const closeOnSmallScreens = () => {
    if (!isWideScreen) {
      handleNav(false);
    }
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''} ${!isWideScreen ? 'slide-out' : ''}`}>
      {(isOpen || isWideScreen) && (
        <ul>
          <li className="nav-item">
            <Link to="/" onClick={closeOnSmallScreens}>Home Page</Link>
          </li>
          <li className="nav-item">
            <Link to="/tco" onClick={closeOnSmallScreens}>Tower Crane Operators</Link>
          </li>
          <li className="nav-item">
            <Link to="/slinger" onClick={closeOnSmallScreens}>Slinger/Signallers</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" onClick={closeOnSmallScreens}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );  
};

export default NavBar;
