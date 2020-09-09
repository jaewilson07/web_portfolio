import React from 'react';

import Education from './atoms/Education';
import Work from './atoms/Work';
import Skill from './atoms/Skill';

const Resume = ({ data }) => (
  <section id="resume">
    <div className="row education">
      <div className="three columns header-col">
        <h1>
          <span>Education</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            {data.education.map((education) => (
              <Education
                school={education.school}
                degree={education.degree}
                graduated={education.graduated}
                description={education.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="row work">
      <div className="three columns header-col">
        <h1>
          <span>Work</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        {data.work.map((work) => (
          <Work
            company={work.company}
            title={work.title}
            years={work.years}
            description={work.description}
          />
        ))}
      </div>
    </div>

    <div className="row skill">
      <div className="three columns header-col">
        <h1>
          <span>Skills</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        <p>{data.skillmessage}</p>

        <div className="bars">
          <ul className="skills">
            {data.skills.map((skill) => (
              <Skill
                name={skill.name}
                skillLevel={skill.level}
                classNameTxt={`bar-expand ${skill.name.toLowerCase()}`}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
