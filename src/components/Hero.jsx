import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleReserveTable = () => {
    navigate('/reservations'); // Redirect to /reservations
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="hero-text">
           Where Fresh Flavors Meet Mediterranean Charm!
        </p>
        <button className="cta-button" onClick={handleReserveTable}>
          Reserve a Table
        </button>
      </div>
      <div className="hero-image"></div>
    </section>
  );
};

export default Hero;