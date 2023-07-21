import React from 'react';

function ThemeToggle({ theme, toggleTheme }) {
    return (
        <div className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? 'Dark theme ' : 'Light theme '}
            {theme === 'light' ? 
                <i className="fas fa-moon" style={{fontSize: "12px"}}></i> : 
                <i className="fas fa-sun" style={{fontSize: "12px"}}></i>
            }
        </div>
    );
}

export default ThemeToggle;
