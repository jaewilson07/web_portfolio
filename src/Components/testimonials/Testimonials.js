import React from 'react';

import Testimonial from '../atoms/Testimonial';

import './Testimonials.scss';
import Background from '../../images/testimonials-bg.jpg';

const Testimonials = ({ data }) => (
  <section id="testimonials" style={{ backgroundImage: `url(${Background})` }}>
    <div className="text-container">
      <div className="row">
        <div className="two columns header-col">
          <h1>
            <span>Client Testimonials</span>
          </h1>
        </div>

        <div className="ten columns flex-container">
          <ul className="slides">
            {data?.testimonials &&
              data.testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  user={testimonial.user}
                  text={testimonial.text}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
