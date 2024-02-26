import React, { useState } from "react";
import axios from 'axios'
import "./register.css";
import Navbar from "../../../components/navbar/Navbar";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

const Register = () => {
  // State for form inputs
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cin, setCin] = useState("");


 // Function to handle form submission
 const handleRegister = async (e) => {
  e.preventDefault();
  const newUser = {
    name,
    password,
    email,
    firstName,
    lastName,
    phoneNumber,
    cin
  };
  axios.post("http://localhost:5000/api/users", newUser)
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
};

  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="registerArea">
        <form className="registerForm" onSubmit={handleRegister}>
          <h2>Register</h2>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />

          <label htmlFor="licensePlate">Identity document:</label>
          <input
            type="text"
            id="licensePlate"
            value={cin}
            onChange={(e) => setCin(e.target.value)}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
