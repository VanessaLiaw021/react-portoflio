//Import packages
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

//Footer Component
const Footer = () => {
  return (
    <footer>
        <a href="https://github.com/VanessaLiaw021"><FontAwesomeIcon icon={faGithub}/></a>
        <a href="https://www.linkedin.com/in/vanessa-liaw-b0a1981a2/"><FontAwesomeIcon icon={faLinkedin}/></a>
    </footer>
  )
}

//Export Footer Component
export default Footer;