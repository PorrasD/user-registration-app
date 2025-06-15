import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="text-center border p-5 rounded shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
        <h1 className="mb-4">Welcome to your Dashboard</h1>
        <p className="mb-4">Your Profile here!</p>
        <button className="btn btn-dark" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;