import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <div className="description-columns">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit. Exercitation veniam 
              consequat sunt nostrud amet.
            </p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet 
              sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
        <div className="about-images">
          <div className="image-stack">
            <div className="image-top"></div>
            <div className="image-bottom"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;