import React from 'react';

const Footer = ({ data }) => (
  <footer>
    <div className="row">
      <div className="twelve columns">
        <ul className="social-links">
          {/* map over network */}
          {data.social &&
            data.social.map((network) => (
              <li key={network.name}>
                <a href={network.url}>
                  <i className={network.className}></i>
                </a>
              </li>
            ))}
        </ul>

        <ul>
          <li>
            <span>Modified with love by the Clever Programmer team ♥️</span>
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
