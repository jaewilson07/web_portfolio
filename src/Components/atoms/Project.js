import React from 'react';

const Project = ({ title, url, category, imageUrl }) => (
  <div key={title} className="columns portfolio-item">
    <div className="item-wrap">
      <a href={url} title={title}>
        <img alt={title} src={imageUrl} />
        <div className="overlay">
          <div className="portfolio-item-meta">
            <h5>{title}</h5>
            <p>{category}</p>
          </div>
        </div>
        <div className="link-icon">
          <i className="fa fa-link"></i>
        </div>
      </a>
    </div>
  </div>
);

export default Project;
