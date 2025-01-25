import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-section">
        <div className="about-content">
          <h1>About Us</h1>
          <div className="about-text">
            <p>
              Little Lemon is a charming neighborhood bistro that serves simple food
              and delicious cocktails in a lively but casual environment. The restaurant
              features a locally-sourced menu with daily specials.
            </p>
            <p>
              Founded in 2010 by brothers Mario and Adrian, Little Lemon has become
              a beloved fixture in the Chicago dining scene. Our passion for fresh
              ingredients and authentic flavors drives everything we do.
            </p>
          </div>
          <div className="about-images">
            <a href="images/about1.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="images/about1.jpg"
                alt="Restaurant interior"
                className="about-image"
              />
            </a>
            <a href="images/about2.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="images/about2.jpg"
                alt="Outdoor seating"
                className="about-image"
              />
            </a>
            <a href="images/about3.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="images/about3.jpg"
                alt="Chef preparing food"
                className="about-image"
              />
            </a>
            <a href="images/about4.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="images/about4.jpg"
                alt="Kitchen"
                className="about-image"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;