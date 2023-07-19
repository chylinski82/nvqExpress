import React from 'react';

function ThemeToggle({ theme, toggleTheme }) {
    return (
        <div className="theme-toggle" onClick={toggleTheme}>
            Theme {theme === 'light' ? 
                <i className="fas fa-moon" style={{fontSize: "16px"}}></i> : 
                <i className="fas fa-sun" style={{fontSize: "16px"}}></i>
            }
        </div>
    );
}

export default ThemeToggle;
