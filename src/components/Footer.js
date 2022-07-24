//Import packages
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

//Footer Component
const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/VanessaLiaw021">
        <FontAwesomeIcon icon={faGithubSquare} className="icon"/>
      </a>
      <a href="https://www.linkedin.com/in/vanessa-liaw-b0a1981a2/">
        <FontAwesomeIcon icon={faLinkedin} className="icon"/>
      </a>
    </footer>
  );
};

//Export Footer Component
export default Footer;