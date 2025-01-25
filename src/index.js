import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Create a root element
const container = document.getElementById('root');
const root = createRoot(container);

// Render your app with BrowserRouter and basename
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/little-lemon">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
