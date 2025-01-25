import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';  // Removed BrowserRouter import
import { auth, onAuthStateChanged } from './firebase';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import AboutPage from './pages/AboutPage';
import ReservationsPage from './pages/ReservationsPage';
import MenuPage from './pages/MenuPage';
import OrderOnlinePage from './pages/OrderOnlinePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.title = "Little Lemon"; // Set the new title here
  }, []);

  useEffect(() => {
    // Track authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // User is signed in
      } else {
        setUser(null); // User is signed out
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order" element={<OrderOnlinePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
