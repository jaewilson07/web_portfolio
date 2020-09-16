import React, { useState } from 'react';

import './App.css';
import './css/default.css';
import './css/media-queries.css';
import './css/layout.scss';

import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import About from './Components/about/About';
import Resume from './Components/resume/Resume';
import Contact from './Components/contact/Contact';
import Testimonials from './Components/testimonials/Testimonials';
import Portfolio from './Components/portfolio/Portfolio';

import { data } from './assets/resumeData';

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

  return (
    <div className="App">
      <Header data={resumeData.main} headerNav={headerNav} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Testimonials data={resumeData.testimonials} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
