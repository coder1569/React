import React from 'react';
import './Services.css'; // Import custom styling for Services Page

function Services() {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>We offer a variety of services to meet your needs. Here’s what we provide:</p>

      <div className="service-cards">
        <div className="service-card">
          <h3>Service 1</h3>
          <p>Description of service 1. We offer the best quality for your needs.</p>
        </div>
        <div className="service-card">
          <h3>Service 2</h3>
          <p>Description of service 2. We are committed to excellence.</p>
        </div>
        <div className="service-card">
          <h3>Service 3</h3>
          <p>Description of service 3. Our expertise makes the difference.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
