import React from 'react';
import './Home.css';  // For styling the Home page
import homeBanner from '../assets/home-banner.png'; // Import the image

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Bike Pitshop</h1>
      <img src={homeBanner} alt="Bike Pitshop" className="home-banner" />
      <p>Your one-stop shop for all bike services and accessories.</p>
    </div>
  );
}

export default Home;
