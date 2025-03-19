import { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header className="header">
      <div className="header__name">
        <span>Ahmed</span>
        <span>Ibrahim</span>
      </div>

      <nav className="header__nav">
        <ul className="nav-list">
          <li><a href="#contact">Contact</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>

      <button 
        className="header__theme-toggle" 
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
}

export default Header;