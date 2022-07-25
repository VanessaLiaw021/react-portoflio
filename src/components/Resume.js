//Import packages
import React from 'react';
import Download from "../assets/resume.pdf";

//Resume Component
const Resume = () => {
  return (
    <div className="main wrapper">

      {/* Resume Heading */}
      <h2 className="nav-heading">Resume</h2>

      {/* Download Resume */}
      <p className="download">Download My <a href={Download} target="_blank" rel="noreferrer">Resume</a></p>
    
      {/* Contact Form */}
      <div className="resume">

        {/* Skills Section */}
        <div className="skills">
          <h3>Skills</h3>
          <hr className="line"></hr>

          <p>Front End Skills:</p>
          <div className="skill-list">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React</li>
            </ul>
          </div>

          <p>Back End Skills:</p>
          <div className="skill-list">
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>NodeJS</li>
              <li>ExpressJS</li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="education">
          <h3>Education</h3>
          <hr className="line"></hr>

          <div className="education-list">
            <div className="associate">
              <p>Central Piedmont Community College</p>
              <p className="year">Aug 2017 - May 2019</p>
            </div>

            <div className="content">
              <p>- Associate of Arts</p>
              <p>- Concentration in Computer Science</p>
              <p>- GPA: 3.6</p>
            </div>
          </div>

          <div className="education-list">
            <div className="associate">
              <p>University of North Carolina at Charlotte</p>
              <p className="year">Aug 2019 - Dec 2021</p>
            </div>

            <div className="content">
              <p>- Bachelor of Science</p>
              <p>- Concentration in Information Technology</p>
              <p>- GPA: 3.8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//Export Resume Component
export default Resume;