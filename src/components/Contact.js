//Import packages
import React from 'react';

//Contact Component
const Contact = () => {
  return (
    <div className="main">
      <h2 className="nav-heading">Contact</h2>

      <form>
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text"></input>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="text"></input>
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea></textarea>
        </div>
        <button>Send</button>
      </form>
    </div>
  );
};

//Export Contact
export default Contact;