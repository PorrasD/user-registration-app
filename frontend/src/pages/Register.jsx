import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';


export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    console.log(data); 
    if (response.ok) {
    alert("¡Registro exitoso!");
    } else {
    alert(data.message || "Error al registrar");
    }
  };

  return (
    <div className="container mt-5">
        <Link to="/" className="btn btn-dark">
         Home
        </Link>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

