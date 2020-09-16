import React, { useState } from 'react';

import ContactDetails from '../atoms/contact-details/ContactDetails';

const Contact = ({ data }) => {
  const {
    message,
    name,
    street,
    city,
    state,
    zip,
    phone,
    email,
    website,
    contactmessage,
  } = data;

  const [frmName, setName] = useState('');
  const [frmSubject, setSubject] = useState('');
  const [frmEmail, setEmail] = useState('');
  const [frmMessage, setMessage] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    window.open(`mailto:${frmEmail}?subject=${frmSubject}&body= ${frmMessage}`);
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  value={frmName}
                  type="text"
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  value={frmEmail}
                  type="text"
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  value={frmSubject}
                  type="text"
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  value={frmMessage}
                  onChange={(e) => setMessage(e.target.value)}
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="contactMessage"
                  placeholder={contactmessage}
                ></textarea>
              </div>

              <div>
                <button type="submit" onClick={handleClick} className="submit">
                  Submit
                </button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <ContactDetails
              {...{ name, street, city, state, zip, phone, email, website }}
            />
          </div>

          <div className="widget widget_tweets"></div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
