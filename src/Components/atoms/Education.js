import React from 'react';

const Education = ({ school, degree, graduated, description }) => (
  <div key={school}>
    <h3>{school}</h3>
    <p className="info">
      {degree} <span>&bull;</span>
      <em className="date">{graduated}</em>
    </p>
    <p>{description}</p>
  </div>
);

export default Education;
