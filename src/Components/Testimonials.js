import React from 'react';

import Testimonial from './atoms/Testimonial';

const Testimonials = ({ data }) => (
  <section id="testimonials">
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
              data.testimonials.map((testimonial) => (
                <Testimonial user={testimonial.user} text={testimonial.text} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
