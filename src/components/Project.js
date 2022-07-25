//Import Packages
import React from 'react';
import Game from "../assets/images/rock-paper-scissor.png";

//Project Component
const Project = () => {
  return (
    <div>
      <div className="card-wrapper">
        <div className="card-image">
          <img src={Game} alt="Rock Paper Scissor Game"/>
        </div>
        <div className="card-content">
          <p>Rock Paper Scissor Game</p>

          <div className="links">
            <a href="#">Live Site</a>
            <a href="#">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
};

//Export Project
export default Project;