import React, { useState } from "react";
import "./auth.css"; // Update the CSS file name to match your login styles
import Navbar from "../../../components/navbar/Navbar";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

const Login = () => {
  // State for form inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log(`User logged in with username: ${username} and password: ${password}`);
  };

  return (
    <>
      <Navbar />
      <Header type="list" /> {/* Update the header type if necessary */}
      <div className="mainArea"> {/* Updated class name */}
        <form className="bookingForm" onSubmit={handleLogin}> {/* Updated class name */}
          <h2>Log In</h2>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

          <button type="submit">Log In</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
