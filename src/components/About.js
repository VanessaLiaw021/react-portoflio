//Import packages
import React from 'react';
import Avatar from "../assets/images/avatar.jpg";

//About Component
const About = () => {
  return (
    <div className="main">
      <h2 className="nav-heading">About Me</h2>

      <div className="about">
        <div>
            <img src={Avatar} alt="Images of Vanessa Liaw" className="avatar"/>
        </div>
        <div>
          <h3 className="about-heading">Hi, I'm <span>Vanessa Liaw</span></h3>
          <p className="about-me">I am 23 years old and I was born on August 4, 1998. I graduated with a 
              Bachelor in <br></br> Computer Science and concentrating in Information Technology. I also minor
              in <br></br> mathematics. I am currently pursuing my career as a Front End Developer because 
              <br></br> I like designing website for others to use and enjoyed. My favorite hobbies are 
              traveling <br></br> anywhere in the world, listening to music, and watch television 
              (especially chinese dramas <br></br> and korean dramas).
          </p>
        </div>
      </div>
    </div>
  );
}

//Export About component
export default About;