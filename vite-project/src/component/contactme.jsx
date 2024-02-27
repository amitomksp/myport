import React from 'react';
import cv from "./mycv.jpg"
const ContactMeSection = () => {
  return (
    <div className="contact-me-section">
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="resume-image">
        <img src="{cv}" alt="My Resume" />
      </div>
    </div>
  );
}

export default ContactMeSection;
