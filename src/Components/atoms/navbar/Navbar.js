import React from 'react';

import './Navbar.scss';

function Navbar({ headerNav, setCurrentHeading, currentHeading }) {
  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#home" title="Hide navigation">
        Hide navigation
      </a>

      <ul id="nav" className="nav">
        {headerNav.map((heading) => (
          <li
            key={heading.id}
            className={`nav-tab ${
              currentHeading === heading.id ? 'current' : null
            }`}
            onClick={() => setCurrentHeading(heading.id)}
          >
            <a className="smoothscroll" href={`#${heading.id}`}>
              {heading.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
