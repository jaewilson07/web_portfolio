import React from 'react';
import Social from '../atoms/social/Social';

import './Footer.scss';

const Footer = ({ data }) => (
  <footer>
    <div className="row">
      <div className="twelve columns">
        <ul className="social__container">
          {/* map over network */}
          {data.social.map((network) => (
            <Social
              key={network.name}
              href={network.url}
              classNameTxt={network.className}
            />
          ))}
        </ul>

        <ul>
          <li>
            <span>
              Modified with love by the Clever Programmer team{' '}
              <span role="img" aria-label="heart">
                ♥️
              </span>
            </span>
          </li>
        </ul>

        <ul className="copyright">
          <li>
            &copy; All credit goes to Tim Baker - Copyright 2017 Tim Baker
          </li>
          <li>
            Design by
            <a title="Styleshout" href="http://www.styleshout.com/">
              Styleshout
            </a>
          </li>
        </ul>
      </div>
      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <i className="icon-up-open"></i>
        </a>
      </div>
    </div>
  </footer>
);
export default Footer;
