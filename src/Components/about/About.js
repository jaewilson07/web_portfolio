import React from 'react';
import ContactDetails from '../atoms/contact-details/ContactDetails';

import './About.scss';

const About = ({ data }) => {
  const { name, bio, phone, email, website, resumeDownload } = data;
  const { street, city, state, zip } = data.address;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <div
            className="profile__pic"
            style={{
              backgroundImage: `url( ${require(`../../images/${data.image}`)})`,
            }}
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <ContactDetails
              {...{ name, street, city, state, zip, phone, email, website }}
            />
            <div className="columns download-col">
              <p>
                <a href={resumeDownload} className="button download__button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
