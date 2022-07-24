//Import packages
import React, { useState } from 'react';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from "./Resume";
import Nav from "./Nav";

//Header Component 
const Header = () => {

  //Set a state to navigate between page
  const [currentPage, setPage] = useState("About");

  //Display the page based on the link clicked
  const displayPage = () => {

    if (currentPage === "About") {
      return <About />
    } else if (currentPage === "Portfolio") {
      return <Portfolio />
    } else if (currentPage === "Contact") {
      return <Contact />
    } else {
      return <Resume />
    }
  };

  return (
    <>
     <div className="header">
        <h1>Vanessa Liaw</h1>
        <Nav currentPage={currentPage} setPage={setPage}/>
      </div>
      <hr></hr>

      <main>
        {displayPage(currentPage)}
      </main>
    </>
  )
}

//Export Header Component
export default Header;