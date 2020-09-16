import React from 'react';
import Background from '../../../images/overlay-bg.png';

import './PortfolioItem.scss';

const PortfolioItem = ({ title, url, category, imageUrl }, index) => {
  return (
    <div key={title} className="columns portfolio-item">
      <div className="item-wrap">
        <a href={url} title={title}>
          <img src={require(`../../../images/portfolio/${imageUrl}`)} alt="" />
          <div
            className="overlay"
            style={{
              backgroundImage: `url(${Background})`,
            }}
          >
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
};

export default PortfolioItem;
