import React, { useState } from 'react';

import './App.css';
import './css/default.css';
import './css/media-queries.css';
import './css/layout.scss';

import { data } from './assets/resumeData';
import About from './Components/about/About';

const headerNav = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'resume', title: 'Resume' },
  { id: 'portfolio', title: 'Works' },
  { id: 'testimonials', title: 'Testimonials' },
  { id: 'contact', title: 'Contact' },
];

const App = () => {
  const [resumeData] = useState(data);

  console.log(headerNav, resumeData);

  return (
    <div className="App">
      <About data={resumeData.main} />
    </div>
  );
};

export default App;
