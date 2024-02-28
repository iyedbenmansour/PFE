import React, { useState } from "react";
import { useAuth } from "../../../AuthContext";
import "./auth.css";
import Navbar from "../../../components/navbar/Navbar";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

const Login = () => {
  const { login } = useAuth(); // Access the login function from the authentication context
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password, rememberMe }),
      });
   
      if (!response.ok) {
        throw new Error('Login failed');
      }
   
      const data = await response.json();
      if (data.success) {
        console.log('Login successful');
        login(); // Call the login function from the authentication context upon successful login
        window.location.href = '/booking';
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      setErrorMessage('Login failed');
    }
  };

  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="mainArea">
        <form className="bookingForm" onSubmit={handleLogin}>
          <h2>Log In</h2>
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div>
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>

          {errorMessage && <p className="error">{errorMessage}</p>}

          <button type="submit">Log In</button>
          <a href="/forgot-password">Forgot Password?</a>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
