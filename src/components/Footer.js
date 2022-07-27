//Import packages
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";

//Footer Component
const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/VanessaLiaw021" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithubSquare} className="icon"/>
      </a>
      <a href="https://www.linkedin.com/in/vanessa-liaw-b0a1981a2/" target="_blank" rel="noreferrer" >
        <FontAwesomeIcon icon={faLinkedin} className="icon"/>
      </a>
      <a href="https://stackoverflow.com/users/19628967/vliaw" target="_blank" rel="noreferrer" >
        <FontAwesomeIcon icon={faStackOverflow} className="icon"/>
      </a>
    </footer>
  );
};

//Export Footer Component
export default Footer;