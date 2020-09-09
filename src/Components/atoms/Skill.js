import React from 'react';

const Skill = ({ name, skillLevel, classNameTxt }) => (
  <li key={name}>
    <span style={{ width: skillLevel }} className={classNameTxt}></span>
    <em>{name}</em>
  </li>
);

export default Skill;
