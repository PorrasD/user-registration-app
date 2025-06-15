import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h1>🌌 Welcome to the Universe Portal 🌌</h1>
        <p>Select your path</p>
        <div className="button-group">
          <button className="home-button" onClick={() => navigate('/login')}>User</button>
          <button className="home-button" onClick={() => navigate('/admin')}>Admin</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
