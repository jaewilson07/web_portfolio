import React, { useState, useEffect } from 'react';

import './App.css';
import Header from './components/presentation/header/Header.component';
import Footer from './components/presentation/footer/Footer';
import About from './components/page/about/About';
import Resume from './components/page/resume/Resume';
import Contact from './components/page/contact/Contact';
import Testimonials from './components/page/testimonials/Testimonials';
import Portfolio from './components/page/portfolio/Portfolio';

import { resumeData } from './assets/resumeData';

const App = () => {
  const [data, setData] = useState(resumeData);

  useEffect(() => {
    console.log(resumeData);
    setData(resumeData);
  }, [resumeData]);

  return (
    <div className="app">
      <Header data={data.main} />
      <About data={data.main} />
      <Resume data={data.resume} />
      <Portfolio data={data.portfolio} />
      <Testimonials data={data.testimonials} />
      <Contact data={data.main} />
      <Footer data={data.main} />
    </div>
  );
};

export default App;
