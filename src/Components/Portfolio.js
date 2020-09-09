import React from 'react';

import Project from './atoms/Project';

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
              <Project
                title={project.title}
                url={project.url}
                category={project.category}
                imageUrl={`${process.env.PUBLIC_URL}/images/portfolio/${project.image}`}
              />
            ))}
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
