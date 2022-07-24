//Import Packages
import React from 'react';

//Nav Componenet
const Nav = (props) => {
  return (
    <div>
      <nav className="nav">
        <a href="#about" onClick={() => props.setPage("About")}>About</a>
        <a href="#portfolio" onClick={() => props.setPage("Portfolio")}>Portfolio</a>
        <a href="#contact" onClick={() => props.setPage("Contact")}>Contact</a>
        <a href="#resume" onClick={() => props.setPage("Resume")}>Resume</a>
      </nav>
    </div>
  )
}

//Export Nav Component
export default Nav;