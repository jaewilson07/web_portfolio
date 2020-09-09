import React from 'react';

const Testimonial = ({ user, text }) => (
  <li key={user}>
    <blockquote>
      <p>{text}</p>
      <cite>{user}</cite>
    </blockquote>
  </li>
);

export default Testimonial;
