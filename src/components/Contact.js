//Import packages
import React, { useState } from 'react';
import validateEmail from "../utils/helpers";

//Contact Component
const Contact = () => {

  //Create state variables and set them to empty string 
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //Function that handle form change 
  const handleChange = (e) => {

    //Get the name and value of the input 
    const value = e.target.value;
    const name = e.target.name;

  };

  //Function that handle form submit
  const handleSubmit = (e) => {

    //Prevent default action 
    e.preventDefault();

    //Clear the form 
    setFullName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="main">
      <h2 className="nav-heading">Contact</h2>

      <form>
        <div className="form-group">
          <label>Full Name:</label>
          <input value={fullName} name="Full Name" type="text" placeholder="Full Name" onChange={handleChange}></input>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input value={email} name="Email" type="text" placeholder="Email" onChange={handleChange}></input>
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea></textarea>
        </div>
        <button className="send" onSubmit={handleSubmit}>Send</button>
      </form>
    </div>
  );
};

//Export Contact
export default Contact;