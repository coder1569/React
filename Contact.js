import React from 'react';
import './Contact.css'; // Import custom styling for Contact Page

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Please fill out the form below to get in touch with us.</p>
      
      <div className="contact-form">
        <form>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Your Name" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Your Email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
