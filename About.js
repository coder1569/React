import React from 'react';
import aboutImage from '../assets/about-image.jpg'; // Import the image
import './About.css'; // Custom styling for About Page

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Your trusted bike repair and customization shop</p>
      </div>

      <div className="about-main-content">
        <div className="about-text">
          <h2>Why Choose Us?</h2>
          <p>
            We are committed to providing the best bike repair and
            customization services in the city. Our team of experts uses
            the latest tools and techniques to ensure your bike runs like new.
          </p>
        </div>

        <div className="about-image-container">
          <img src={aboutImage} alt="About Bike Pitshop" className="about-image" />
        </div>
      </div>

      <div className="about-services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Bike Repair</h3>
            <p>Expert repair for all types of bikes, including quick fixes and major repairs.</p>
          </div>
          <div className="service-item">
            <h3>Customization</h3>
            <p>Personalized bike modifications to make your ride unique and stylish.</p>
          </div>
          <div className="service-item">
            <h3>Maintenance</h3>
            <p>Regular bike maintenance to keep your bike running smoothly for years.</p>
          </div>
        </div>
      </div>

      <div className="about-footer">
        <p>Contact us today to learn more about how we can help you with your bike!</p>
      </div>
    </div>
  );
}

export default About;
