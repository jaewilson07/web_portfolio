import React from 'react';

import PortfolioItem from '../atoms/portfolio-item/PortfolioItem';

import './Portfolio.scss';

const Portfolio = ({ data }) => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Works.</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          {data?.projects &&
            data.projects.map((project) => (
              <PortfolioItem
                key={project.title}
                title={project.title}
                url={project.url}
                category={project.category}
                imageUrl={project.image}
              />
            ))}
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
