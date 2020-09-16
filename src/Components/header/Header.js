import React, { useState } from 'react';

import Social from '../atoms/social/Social';

import './Header.scss';
import Background from '../../images/header-background.jpg';
import Navbar from '../atoms/navbar/Navbar';

const Header = ({ data, headerNav }) => {
  const { name, occupation, description, social } = data;
  const { city } = data.address;

  const [currentHeading, setCurrentHeading] = useState('home');

  return (
    <header
      id="home"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <Navbar
        headerNav={headerNav}
        setCurrentHeading={setCurrentHeading}
        currentHeading={currentHeading}
      />

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">{name}.</h1>
          <h3>
            A {city} based <span>{occupation}</span>. {description}.
          </h3>
          <hr />
          <ul className="social__container">
            {social.map((network) => (
              <Social
                key={network.name}
                url={network.url}
                classNameTxt={network.className}
              />
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
