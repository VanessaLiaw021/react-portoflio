//Import Packages
import React from 'react';

//Project Component
const Project = (props) => {
  return (
    <div className="card-wrapper">
      <div className="card-image">
        <img src={props.image} alt={props.imageAlt}/>
      </div>
      <div className="card-content">
        <p>{props.title}</p>
        <div className="live-github-link">
          <a href={props.liveSite} target="_blank" rel="noreferrer">Live Site</a>
          <a href={props.gitHub} target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </div>
  );
};

//Export Project
export default Project;