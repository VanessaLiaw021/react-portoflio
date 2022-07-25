//Import packages
import React, { useState } from 'react';

//Contact Component
const Contact = () => {

  //Create state variables and set them to empty string 
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState('');

  return (
    <div className="main">
      <h2 className="nav-heading">Contact</h2>

      <form>
        <div className="form-group">
          <label>Full Name:</label>
          <input value={fullName} name="Full Name" type="text" placeholder="Full Name"></input>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input value={email} name="Email" type="text" placeholder="Email"></input>
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea></textarea>
        </div>
        <button className="send">Send</button>
      </form>
    </div>
  );
};

//Export Contact
export default Contact;