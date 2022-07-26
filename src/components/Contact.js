//Import packages
import React, { useState } from 'react';
import validateEmail from "../utils/helpers";

//Contact Component
const Contact = () => {

  //Create state variables and set them to empty string 
  const [formInput, setFormInput] = useState({name: "", email: "", message: ""});
  const [errorMessage, setErrorMessage] = useState("");

  //Grab only the variable we want to use
  const { name, email, message } = formInput;

  //Function that handle form change 
  const handleChange = (e) => {

    //Check to see the field for email 
    if (e.target.name === "email") {
      
      //Use helper method to validate the email
      const validEmail = validateEmail(e.target.value);

      //Check to see if the email matches the helper method 
      !validEmail ? setErrorMessage("Enter a valid email") : setErrorMessage("");

    } else {

      !e.target.value.length ? setErrorMessage(`${e.target.name} is required.`) : setErrorMessage("");

    };
    
    //Set the target name, email, message if no error occurs
    if (!errorMessage) setFormInput({...formInput, [e.target.name]: [e.target.value]});
  };

  //Function that handle form submit
  const handleSubmit = (e) => {

    //Prevent default action 
    e.preventDefault();

    //Clear the Form
    setFormInput("");
  }

  return (
    <div className="main">
      <h2 className="nav-heading">Contact</h2>
      <form>
        <div className="form-group">
          <label>Full Name:</label>
          <input name="name" defaultValue={name} type="text" placeholder="Full Name" onBlur={handleChange}></input>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input name="email" defaultValue={email} type="text" placeholder="Email" onBlur={handleChange}></input>
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea name="message" defaultValue={message}></textarea>
        </div>
        <p className="error-message">{errorMessage}</p>
        <button type="submit" className="send" onSubmit={handleSubmit}>Send</button>
      </form>
    </div>
  );
};

//Export Contact
export default Contact;