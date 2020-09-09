import React, { useState } from 'react';
import './Header.styles.scss';

const headings = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'resume', title: 'Resume' },
  { id: 'works', title: 'Works' },
  { title: 'Testimonials' },
  { title: 'Contact' },
];

const Header = ({ data }) => {
  const { name, occupation, description, city, social } = data;

  const [currentTab, setCurrentTab] = useState('home');

  return (
    <header className="home">
      <nav className="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul className="nav" className="nav">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={heading.title === currentTab ? 'current' : null}
            >
              <a className="smoothscroll" href={`#${heading.id}`}>
                {heading.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>
            I'm a {city} based <span>{occupation}</span>. {description}.
          </h3>
          <hr />
          <ul className="social">
            {social.map((network) => (
              <li key={network.name}>
                <a href={network.url}>
                  <i className={network.className}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
