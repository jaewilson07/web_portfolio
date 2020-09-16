import React from 'react';

import ResumeSection from '../atoms/resume-section/ResumeSection';

import './Resume.scss';

const Section = ({ id, title, content }) => (
  <div className={`row ${id}`}>
    <div className="three columns header-col">
      <h1 className="section-heading">
        <span>{title}</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">{content}</div>
      </div>
    </div>
  </div>
);

const Resume = ({ data }) => {
  const section = [
    {
      id: 'education',
      title: 'education',
      content: data.education.map((education, index) => (
        <ResumeSection
          sectionType="education"
          key={index}
          school={education.school}
          degree={education.degree}
          graduated={education.graduated}
          description={education.description}
        />
      )),
    },
    {
      id: 'work',
      title: 'Work',
      content: data.work.map((work) => (
        <ResumeSection
          sectionType="work"
          key={work.title}
          company={work.company}
          title={work.title}
          years={work.years}
          description={work.description}
        />
      )),
    },
    {
      id: 'skills',
      title: 'skills',
      content: (
        <React.Fragment>
          <p>{data.skillmessage}</p>

          <div className="skills__container">
            <ul className="skills-list">
              {data.skills.map((skill) => (
                <ResumeSection
                  sectionType="skill"
                  key={skill.name}
                  name={skill.name}
                  skillLevel={skill.level}
                  classNameTxt={`bar-expand ${skill.name.toLowerCase()}`}
                />
              ))}
            </ul>
          </div>
        </React.Fragment>
      ),
    },
  ];

  return (
    <section id="resume">
      {section.map(({ id, title, content }) => (
        <div className="section-divider">
          <Section {...{ id, title, content }} />
        </div>
      ))}
    </section>
  );
};

export default Resume;
