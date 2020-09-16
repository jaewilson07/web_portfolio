import React from 'react';

import './ResumeSection.scss';

const ResumeSection = (props) => {
  const info = {
    work: (
      <React.Fragment>
        {props.title}
        <span>&bull;</span> <em className="date">{props.years}</em>
      </React.Fragment>
    ),
    education: (
      <React.Fragment>
        {props.degree} <span>&bull;</span>
        <em className="date">{props.graduated}</em>
      </React.Fragment>
    ),
  };

  return props.sectionType === 'skill' ? (
    <li key={props.key} className="skill">
      <span
        style={{ width: props.skillLevel }}
        className={props.classNameTxt}
      ></span>
      <em>{props.name}</em>
    </li>
  ) : (
    <div key={props.key}>
      <h3>{props.company ?? props.school}</h3>
      <p className="info std_info">{info[props.sectionType]}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default ResumeSection;
