// components/Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import './Header.css';

const Header = ({ user }) => {
  const [showSignOut, setShowSignOut] = useState(false);

  const handleSignOut = () => {
    auth.signOut(); // Sign out the user
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo-link">
          <img
            src="images/logo.jpg"
            alt="Little Lemon Logo"
            className="logo"
          />
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/order">Order Online</Link></li>
          {user ? (
            <li
              className="user-greeting"
              onMouseEnter={() => setShowSignOut(true)}
              onMouseLeave={() => setShowSignOut(false)}
            >
              Welcome, {user.displayName || user.email}
              {showSignOut && (
                <div className="sign-out-slider" onClick={handleSignOut}>
                  Sign Out
                </div>
              )}
            </li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;