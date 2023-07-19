import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const NavBar = ({ isOpen, handleNav, toggleTheme }) => { // Receive toggleTheme as a prop
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 600);

  const checkScreenSize = () => {
    setIsWideScreen(window.innerWidth > 600);
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
