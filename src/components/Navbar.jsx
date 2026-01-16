import React from 'react';

const Navbar = ({ theme, toggleTheme, isScrolled, isNavActive, setIsNavActive }) => {
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar container">
        <a href="#" className="logo"><span>Bishal Koirala</span></a>
        
        <ul className={`nav-links ${isNavActive ? 'active' : ''}`}>
          <li><a href="#hero" className="active" onClick={() => setIsNavActive(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsNavActive(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setIsNavActive(false)}>Skills</a></li>
          <li><a href="#experience" onClick={() => setIsNavActive(false)}>Experience</a></li>
          <li><a href="#education" onClick={() => setIsNavActive(false)}>Education</a></li>
          <li><a href="#projects" onClick={() => setIsNavActive(false)}>Projects</a></li>
          <li><a href="#certifications" onClick={() => setIsNavActive(false)}>Certifications</a></li>
          <li><a href="#contact" onClick={() => setIsNavActive(false)}>Contact</a></li>
        </ul>

        <div className="nav-actions">
          <button id="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? (
              <svg className="sun" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            ) : (
              <svg className="moon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            )}
          </button>
          <div className={`hamburger ${isNavActive ? 'active' : ''}`} onClick={() => setIsNavActive(!isNavActive)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
