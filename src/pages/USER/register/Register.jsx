import React, { useState } from "react";
import "./register.css"; // Import the updated CSS file
import Navbar from "../../../components/navbar/Navbar";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

const Register = () => {
  // State for form inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");

  // Function to handle form submission
  const handleRegister = (event) => {
    event.preventDefault();
    // Handle registration logic here
    console.log(`User registered with username: ${username}, password: ${password}, email: ${email}, first name: ${firstName}, last name: ${lastName}, phone number: ${phoneNumber}, license plate: ${licensePlate}, vehicle make: ${vehicleMake}, vehicle model: ${vehicleModel}, vehicle color: ${vehicleColor}`);
  };

  return (
    <>
      <Navbar />
      <Header type="list" /> {/* Update the header type if necessary */}
      <div className="registerArea"> {/* Updated class name */}
        <form className="registerForm" onSubmit={handleRegister}> {/* Updated class name */}
          <h2>Register</h2>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
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
            value={licensePlate}
            onChange={(e) => setLicensePlate(e.target.value)}
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
