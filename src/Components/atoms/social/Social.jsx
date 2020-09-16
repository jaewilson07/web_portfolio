import React from 'react';
import './Social.scss';

const Social = ({ name, url, classNameTxt }) => {
  return (
    <li key={name} className="social">
      <a href={url}>
        <i className={`icon ${classNameTxt}`}></i>
      </a>
    </li>
  );
};

export default Social;
