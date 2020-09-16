import React from 'react';
import './ContactDetails.scss';

const ContactDetails = ({
  name,
  street,
  city,
  state,
  zip,
  phone,
  email,
  website,
}) => (
  <div className="columns contact-details">
    <h2>Contact Details</h2>
    <p className="address">
      <span>{name}</span>
      <br />
      <span>
        {/* conditionally render street and zip code*/}
        {street && street}
        {street && <br />}
        {city} {state}
        {zip && `, ${zip}`}
      </span>
      <br />

      {/* conditionally render phone  and website */}
      {phone && (
        <span>
          <br />
          {phone}
        </span>
      )}
      <br />
      <span>{email}</span>
      {website && (
        <span>
          <br />
          {website}
        </span>
      )}
    </p>
  </div>
);

export default ContactDetails;
