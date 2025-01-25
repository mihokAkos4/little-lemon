import React from 'react';
import './About.css';

const LocationInfo = () => {
  return (
    <section className="location-section">
      <div className="location-content">
        <div className="location-text">
          <h1 className="restaurant-name">Little Lemon</h1>
          <h2 className="restaurant-location">Chicago, Illinois</h2>
          <p className="restaurant-description">
            A vibrant Mediterranean kitchen bringing traditional flavors to the heart of Chicago. 
            We specialize in authentic recipes passed down through generations, using fresh, 
            locally-sourced ingredients. Our menu features classic dishes with a modern twist, 
            from smoky grilled meats to fresh seafood and colorful vegetarian options.
          </p>
        </div>

        <div className="map-icon-container">
          <div className="map-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M172.3 501.7C27 291 0 269.4 0 192 0 86 86 0 192 0s192 86 192 192c0 77.4-27 99-172.3 309.7c-9.5 13.8-29.9 13.8-39.5 0zM192 272c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;