//Import packages
import React from 'react';
import Project from "./Project";
import ProjectData from "../projectData";

//Portfolio Component
const Portfolio = () => {
  return (
    <div className="main" id="portfolio">
      <h2 className="nav-heading">Projects</h2>
      <div className="card">{ProjectData.map(project => <Project key={project.id} {...project}/>)}</div>
    </div>
  );
};

//Export Portoflio Component
export default Portfolio;