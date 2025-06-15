import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      setIsLoggedIn(true);
      alert('Logged In');
      navigate('/dashboard');
    } else {
      alert('Error, Please try again!');
    }
  };

  return (
     <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary">Please Sign In </h1>
        <Link to="/" className="btn btn-dark">
          Home
        </Link>
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Sign in</button>
    </form>
    <button
  type="button"
  className="btn btn-link mt-2"
  onClick={() => navigate("/register")}
>
  Register
</button>
    </div>
    </div>
  );
}