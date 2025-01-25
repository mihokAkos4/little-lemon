import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-column">
          <h3>Little Lemon</h3>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        </div>
        <div className="footer-column">
          <h4>Navigation</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>123 Lemon Street</li>
            <li>(555) 123-4567</li>
            <li>contact@littlelemon.com</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Social Media</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;