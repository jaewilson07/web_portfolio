import React from 'react';

const Work = ({ company, title, years, description }) => (
  <div key={company}>
    <h3>{company}</h3>
    <p className="info">
      {title}
      <span>&bull;</span> <em className="date">{years}</em>
    </p>
    <p>{description}</p>
  </div>
);

export default Work;
